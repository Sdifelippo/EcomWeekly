import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Exotics extends Component{
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
      color: 'white'
    }
    let rareLink = {
      color: 'white'
    }
    let legendaryGear = {
      height: '4rem',
      width: '4rem'
    }

    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>This is Exotic gear</h2>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./exoticHelm.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='legendaryGear'>Exotic Helm</NavLink>
          <p>Price:4 Legendary Shards</p>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./exoticChest.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Exotic Chest</NavLink>
          <p>Price:4 Legendary Shards</p>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./exoticGauntlets.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Exotic Gauntlets</NavLink>
          <p>Price:4 Legendary Shards</p>

          <p className="AppIntro">
            Powered by Glimmer
          </p>
        </div>
      </div>
    );
  }
  }
  export default Exotics;
