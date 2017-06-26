import 'purecss/build/pure.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import store from './store';

ReactDOM.render((
  <Provider minions={store.minions}>
    <Router> 
      <App />
    </Router>
  </Provider>
  ),document.getElementById('root'));
registerServiceWorker();
