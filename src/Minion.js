import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import './App.css';

class Minion extends Component {
  render() {
    return(
      <div className='pure-u-1-3' id='contact-show'>
        <h4> 
          {this.props.ids.map(x => 
            
            <div><iframe key={x} src={"https://giphy.com/embed/"+ x} width="480" height="216" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>

            )}

        </h4>
      </div>
    );
  }
}

export default Minion;
