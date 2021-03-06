// Action types
const LOAD_CLIENTS = '/clients/LOAD_CLIENTS';
const CREATE_CLIENT = '/clients/CREATE_CLIENT'; // also used for update
const REMOVE_CLIENT = '/clients/REMOVE_CLIENT'; // also used for update

// Action creators
const load = (clients) => ({
  type: LOAD_CLIENTS,
  clients,
});

const create = (client) => ({
  // also used for update
  type: CREATE_CLIENT,
  client,
});

const remove = (clientId) => ({
  type: REMOVE_CLIENT,
  clientId,
});

// Thunks
// gets all clients associated with logged-in user
export const getClients = (userId) => async (dispatch) => {
  const res = await fetch(`/api/clients/${userId}`);
  const json = await res.json();
  if (res.ok) {
    dispatch(load(json.clients));
  }
};

// create is also used to update if clientId is passed in as second argument
export const createClient = (client, clientIDtoUpdate = null) => async (dispatch) => {
  const {
    userId,
    name,
    age,
    imageURL,
    image,
    clientType,
    energy,
    social,
    behaved,
    size,
    env,
    description,
  } = client;

  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('name', name);
  formData.append('age', age);
  formData.append('imageURL', imageURL);
  formData.append('clientType', clientType);
  formData.append('energy', energy);
  formData.append('social', social);
  formData.append('behaved', behaved);
  formData.append('size', size);
  formData.append('env', env);
  formData.append('description', description);

  if (image) formData.append('image', image);

  if (clientIDtoUpdate) {
    // for updating client
    const res = await fetch(`/api/clients/${clientIDtoUpdate}`, {
      method: 'PUT',
      body: formData,
    });

    const updatedClient = await res.json();

    if (res.ok) {
      dispatch(create(updatedClient));
      return updatedClient;
    } else {
      const errors = client;
      return errors;
    }
  } else {
    // for creating client
    const res = await fetch(`/api/clients`, {
      method: 'POST',
      body: formData,
    });
    const client = await res.json();

    if (!client.errors) {
      dispatch(create(client));
      return client;
    } else {
      const errors = client;
      return errors;
    }
  }
};

export const deleteClient = (clientId) => async (dispatch) => {
  const res = await fetch(`/api/clients/${clientId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(clientId));
  }
};

// Reducer
const initState = {};

const clientReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_CLIENTS:
      for (let client of action.clients) {
        newState[client.id] = client;
      }
      return newState;
    case CREATE_CLIENT:
      newState[action.client.id] = action.client;
      return newState;
    case REMOVE_CLIENT:
      delete newState[Number(action.clientId)];
      return newState;
    default:
      return newState;
  }
};

export default clientReducer;
