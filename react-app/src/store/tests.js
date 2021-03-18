// Action types
const LOAD_TESTS = '/tests/LOAD_TESTS';
// const CREATE_TEST = '/tests/CREATE_TEST'; // also used for update
const REMOVE_TEST = '/tests/REMOVE_TEST';

// Action creators
const load = (tests) => ({
  type: LOAD_TESTS,
  tests,
});

// const create = (test) => ({
//   // also used for update
//   type: CREATE_TEST,
//   test,
// });

const remove = (testId) => ({
  type: REMOVE_TEST,
  testId,
});

// Thunks
// gets all tests associated with logged-in user
export const getTests = (userId) => async (dispatch) => {
  const res = await fetch(`/api/tests/${userId}`);
  const json = await res.json();
  if (res.ok) {
    dispatch(load(json.tests));
  }
};

// // create is also used to update if testId is passed in as second argument
// export const createTest = (test, testIDtoUpdate = null) => async (
//   dispatch
// ) => {
//   if (testIDtoUpdate) {
//     // for updating test
//     const res = await fetch(`/api/tests/${testIDtoUpdate}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(test),
//     });

//     const updatedTest = await res.json();

//     if (res.ok) {
//       dispatch(create(updatedTest));
//       return updatedTest;
//     } else {
//       const errors = test;
//       return errors;
//     }
//   } else {
//     // for creating test
//     const res = await fetch(`/api/tests/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(test),
//     });
//     const resTest = await res.json();

//     console.log('returned', resTest);

//     if (!resTest.errors) {
//       dispatch(create(resTest));
//       return resTest;
//     } else {
//       const errors = resTest;
//       return errors;
//     }
//   }
// };

export const deleteTest = (testId) => async (dispatch) => {
  const res = await fetch(`/api/tests/${testId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(testId));
  }
};

// Reducer
const initState = {};

const testReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_TESTS:
      for (let test of action.tests) {
        newState[test.id] = test;
      }
      return newState;
    // case CREATE_TEST:
    //   newState[action.test.id] = action.test;
    //   return newState;
    case REMOVE_TEST:
      delete newState[Number(action.testId)];
      return newState;
    default:
      return newState;
  }
};

export default testReducer;
