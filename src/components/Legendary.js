import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Legendary extends Component{
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
          <h2>This is Legendary gear</h2>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./legendChest.png')}/>
          <NavLink to='/' style={rareLink} activeClassName='legendaryGear'>Legendary Chest Piece</NavLink>
          <p>Price:300 Glimmer</p>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./legendBoots.png')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Legendary Boots</NavLink>
          <p>Price:300 Glimmer</p>

          <img className="legendaryGear" style= {legendaryGear} alt="Master Rahool" src={require('./legendGauntlets.jpg')}/>
          <NavLink to='/' style={rareLink} activeClassName='selected'>Legendary Gauntlets</NavLink>
          <p>Price:300 Glimmer</p>

          <p className="AppIntro">
            Powered by Glimmer
          </p>
        </div>
      </div>
    );
  }
  }
  export default Legendary;
