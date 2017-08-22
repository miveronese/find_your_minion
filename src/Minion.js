import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import './App.css';

class Minion extends Component {
  render() {
    return(
      <div className='pure-u-1-3' id='contact-show'>
        <h4>
          {this.props.urls.map(x => 
            <img src={x} key={x} > {x} </img> )}
        </h4>
      </div>
    );
  }
}

export default Minion;
