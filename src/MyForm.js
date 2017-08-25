import React, { Component } from 'react';
import './App.css';
import Minion from './Minion';

class MyForm extends Component {
  constructor() {
    super();
    this.state = { ids: [], user_input: ' ' };
    // this.addMinion = this.addMinion.bind(this);
  }

  getInput = (e) => {
    this.setState({user_input: e.target.value});
    console.log("haaaaaa");
    console.log(this.state.user_input);
  }

  addMinion = (e) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=eebf3c5925444f7795113971df688682&q=minion '+this.state.user_input+'&limit=1&offset=0&rating=G&lang=en';
    e.preventDefault();
    fetch(url)
      .then(response => {
        return response.json();
        console.log(response.json());
      })
      .then(data => {
        console.log(data);
        console.log(data.data.map(x => x.id ));
        return this.setState({ ids: data.data.map(x => x.id ) });
      })
  }

  newMinion = () =>
      <form className='form-custom pure-form pure-g' onSubmit={ this.addMinion }> 
        <div className="pure-u-12">
          <input className='pure-input' ref='minion' type='text' value={this.state.user_input} onChange={this.getInput} placeholder='search' /> 
        </div>
        <button type='submit' className='pure-button pure-button-primary'> + </button>
      </form>
 
  render() {
    return (
      <div id='container'>
        <div className='meu-form'>
          { this.newMinion() }
        </div>
          <Minion ids={ this.state.ids } />
      </div>   
    );
  }
}

export default MyForm;
