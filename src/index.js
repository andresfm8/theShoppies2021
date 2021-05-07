import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import reportWebVitals from './reportWebVitals';
import './index.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';

ReactDOM.render(
  <Provider store = { store }>
    <React.StrictMode>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
