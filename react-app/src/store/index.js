import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import sessionReducer from './session';
import clientReducer from './clients';
import testReducer from './tests';

const combineReducer = combineReducers({
  session: sessionReducer,
  clients: clientReducer,
  tests: testReducer,
});

// changed reducer above from "rootReducer" to "combineReducer", and added
// this new "rootReducer" to remove all data from store when user logs out
const rootReducer = (state, action) => {
  if (action.type === 'session/REMOVE_USER') {
    state = undefined;
  }

  return combineReducer(state, action);
};

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preLoadedState) => {
  return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;
