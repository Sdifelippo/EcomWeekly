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
    let rareGear = {
      height: '4rem',
      width: '4rem'
    }

    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>This is rare gear</h2>
          <img className="rareGear" style= {rareGear} alt="Master Rahool" src={require('./rareChest.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Rare Chest Piece</NavLink>
          <p>Price:300 Glimmer</p>
          <img className="rareGear" style= {rareGear} alt="Master Rahool" src={require('./rareLegs.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Rare Boots Piece</NavLink>
          <p>Price:300 Glimmer</p>
          <img className="rareGear" style= {rareGear} alt="Master Rahool" src={require('./rareGauntlets.png')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Rare Gauntlets</NavLink>
          <p>Price:300 Glimmer</p>
          <p className="AppIntro">
            Powered by Glimmer
          </p>
        </div>
      </div>
    );
  }
}

export default Rare;
