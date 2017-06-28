import 'purecss/build/pure.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render((
    <Router> 
      <App />
    </Router>
  ),document.getElementById('root'));
registerServiceWorker();
