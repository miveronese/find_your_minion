import React, { Component } from 'react';
import './App.css';

class MyForm extends Component {
  constructor() {
    super();
    this.state = { url: "bla" };
    // this.addMinion = this.addMinion.bind(this);

  }

  // componentWillMount() {
  //   this.setState ({
  //     minions: { url: "http://google.com"},
  //   });
  // }

  addMinion = (e) => {
    // const url = 'https://api.giphy.com/v1/gifs/search?api_key=eebf3c5925444f7795113971df688682&q=minions&limit=5&offset=0&rating=G&lang=en';
    e.preventDefault();
    this.setState(prevState => ({
      url: "bli"
    }));
    console.log(this.state);
    console.log(this);
    console.log(this.setState.url);


    // fetch(url)
    //   .then(function(response) {
    //     return response;
    //   })

    //   .then(function(data) {
    //     // console.log(data)
    //     this.setState({
    //         url: url  
    //     });
    //   })
  }

  newMinion = () =>
      <form className='form-custom pure-form pure-g' onSubmit={this.addMinion}> 
        <div className="pure-u-12">
          <input className='pure-input' ref='minion' type='text' placeholder='search' /> 
        </div>

        <button type='submit' className='pure-button pure-button-primary'> { this.state.url } </button>
      </form>
 

  render() {
    return (
      <div id='container'>

        <div className='meu-form'>
          {this.newMinion()}
        </div>
        <div className='my-minions'>
          {  }
        </div>
      </div>   
    );
  }
}

export default MyForm;
