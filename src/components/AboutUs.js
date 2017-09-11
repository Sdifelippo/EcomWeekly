import React, { Component } from 'react';
import '../styles/App.css';

class AboutUs extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
    }
    return (
      <div>
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>About us</h2>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;
