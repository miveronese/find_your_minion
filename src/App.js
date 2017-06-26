import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MyForm from './MyForm';
import Minion from './Minion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>A simple form with Mobx and PureCss</h1>
        </div>
        <p className="App-intro">
        </p>
          <Route exact path='/' component={MyForm}/>
            <Route path='/minions/:minionId' component={Minion}/>
      </div>
    );
  }
}

export default App;
