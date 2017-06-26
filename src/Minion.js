import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import './App.css';

const Minion = observer(['minions'],
  class Minion extends Component {

    removeMinion = (e) => {
      e.preventDefault()
      this.props.minions.remove(this.props.id)
    }

    render() {
      return(
        <div className='pure-u-1-3' id='contact-show'>
          <h2 >
            <Link to={`/minions/${this.props.id}`}>
              {this.props.first_name} {this.props.last_name}
               <a href='#'
              className='pure-button' id='removeButton'
              onClick={this.removeMinion}> x </a>
            </Link>
          </h2>
          <p>{this.props.email}
       
          </p>

        </div>
      );
    }
  }
)

export default Minion;
