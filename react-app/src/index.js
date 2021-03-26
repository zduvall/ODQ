import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// app, context, redux, css
import App from './App';
import { ModalProvider } from './context/Modal';
import configureStore from './store/index';
import * as sessionActions from './store/session';

import './index.css';

// stripe imoprts and setup
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

// set up store
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <Elements stripte={stripePromise}>
          <App />
        </Elements>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
