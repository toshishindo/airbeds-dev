import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import auth from './modules/auth';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reducer = combineReducers({
  auth
});

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
