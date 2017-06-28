import React, { Component } from 'react';
import './App.css';
import Minion from './Minion';

class MyForm extends Component {
  constructor() {
    super();
    this.state = { url: "bla" };
    this.addMinion = this.addMinion.bind(this);

  }

  addMinion = (e) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=eebf3c5925444f7795113971df688682&q=minions&limit=5&offset=0&rating=G&lang=en';
    e.preventDefault();
    fetch(url)
      .then(response => {
        this.setState({ url: response.url});
        console.log(response.url)
      })
  }

  newMinion = () =>
      <form className='form-custom pure-form pure-g' onSubmit={this.addMinion}> 
        <div className="pure-u-12">
          <input className='pure-input' ref='minion' type='text' placeholder='search' /> 
        </div>
        <button type='submit' className='pure-button pure-button-primary'> + </button>
      </form>
 
  render() {
    return (
      <div id='container'>
        <div className='meu-form'>
          {this.newMinion()}
        </div>
          <Minion url={ this.state.url } />
      </div>   
    );
  }
}

export default MyForm;
