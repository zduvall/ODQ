// // Action types
// const LOAD_TESTS = '/tests/LOAD_TESTS';
// const REMOVE_TEST = '/tests/REMOVE_TEST';

// // Action creators
// const load = (tests) => ({
//   type: LOAD_TESTS,
//   tests,
// });


// const remove = (testId) => ({
//   type: REMOVE_TEST,
//   testId,
// });

// // Thunks
// // gets all tests associated with logged-in user
// export const getTests = (userId) => async (dispatch) => {
//   const res = await fetch(`/api/tests/${userId}`);
//   const json = await res.json();
//   if (res.ok) {
//     dispatch(load(json.tests));
//   }
// };

// export const deleteTest = (testId) => async (dispatch) => {
//   const res = await fetch(`/api/tests/${testId}`, {
//     method: 'DELETE',
//   });
//   if (res.ok) {
//     dispatch(remove(testId));
//   }
// };

// // Reducer
// const initState = {};

// const testReducer = (state = initState, action) => {
//   const newState = { ...state };

//   switch (action.type) {
//     case LOAD_TESTS:
//       for (let test of action.tests) {
//         newState[test.id] = test;
//       }
//       return newState;
//     case REMOVE_TEST:
//       delete newState[Number(action.testId)];
//       return newState;
//     default:
//       return newState;
//   }
// };

// export default testReducer;
