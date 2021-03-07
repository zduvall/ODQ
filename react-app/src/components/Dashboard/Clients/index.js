import { useState, createContext, useContext } from 'react';

// import components
import AllClients from './AllClients.js';
import ClientFrom from './ClientForm';

const ClientsContext = createContext();
export const useClientsContext = () => useContext(ClientsContext);

export default function Clients() {
  const [showForm, setShowForm] = useState(false);
  const [clientToUpdate, setClientToUpdate] = useState(null);

  return (
    <ClientsContext.Provider
      value={{ setShowForm, setClientToUpdate, clientToUpdate }}
    >
      {/* <div className='dashboard__sub-section client-buttons-container'> */}
      <button
        className='primary-button dashboard__button'
        onClick={() => setShowForm(true)}
        disabled={showForm}
      >
        New Client
      </button>
      {/* </div> */}
      <div className='dashboard__sub-section clients-container'>
        {!showForm && <AllClients />}
        {showForm && <ClientFrom />}
      </div>
    </ClientsContext.Provider>
  );
}
