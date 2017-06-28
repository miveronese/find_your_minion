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
          <h1>Find your Minion</h1>
        </div>
        <p className="App-intro">
        </p>
          <Route exact path='/' component={MyForm}/>
      </div>
    );
  }
}

export default App;
