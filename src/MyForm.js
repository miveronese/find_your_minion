import React, { Component } from 'react';
import Minion from './Minion';
import { observer } from 'mobx-react';
import './App.css';
import { inject } from 'mobx-react';

const MyForm = observer(['minions'], 
  class MyForm extends Component {
    componentWillMount() {
      this.props.minions.fetchAll();    
    }

    addMinion = (e) => {
      e.preventDefault();

      this.props.minions.add({ 
        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        email: this.refs.email.value,
      });

      this.refs.first_name.value = null;
      this.refs.last_name.value = null;
      this.refs.email.value = null;
    };

    newMinion = () =>
        <form className='form-custom pure-form pure-g' onSubmit={this.addMinion}> 
          <div class="pure-u-12">
            <input className='pure-input' ref='email' type='email' placeholder='email' /> 
          </div>
          <div class="pure-u-12">
            <input className='pure-input' ref='first_name' type='text' placeholder='first name' />
          </div>  
          <div class="pure-u-12">
            <input className='pure-input' ref='last_name' type='text' placeholder='last name' />
          </div>
          <button type='submit' className='pure-button pure-button-primary'> + </button>
        </form>
   

    render() {
      return (
        <div id='container'>
          <div className='meu-form'>
            {this.newMinion()}
          </div>
          <div className='pure-g'>
            {this.props.minions.all.slice().map(x => 
              <Minion key={x.id.toString()} {...x} />
            )}
          </div>
        </div>   
      );
    }
  }
)



export default MyForm;
