import React, { Component } from 'react';
import '../styles/App.css';

class About extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
    }
    let MyImage = {
        "borderRadius": "13rem",
        "height": "8rem",
        "width": "6rem"
      }
    return (
      <div>
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>About</h2>
          <p>Master Rahool is the Cryptarch of the Tower who sells and decodes engrams and exchanges enemy artifacts for Glimmer</p>
          <img className="MyImage" style= {MyImage} alt="Master Rahool" src={require('./Master_Rahool.png')}/>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
