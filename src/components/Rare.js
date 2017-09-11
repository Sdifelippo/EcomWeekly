import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';

class Rare extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
      color: 'white'
    }
    let rareLink = {
      color: 'white'
    }
    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>This is rare gear</h2>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Rare Gear</NavLink>
          <p className="AppIntro">
            Powered by Glimmer
          </p>
        </div>
      </div>
    );
  }
}

export default Rare;
