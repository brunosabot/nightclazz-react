import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';

import App from './App';
import basket from './basket.store';
import beers from './beers.store';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(combineReducers({ basket, beers }));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
