import React, { Component } from 'react';
import '../styles/App.css';

class Contact extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
      color: 'white'
    }
    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>Contact us</h2>
          <p>Contact Master Rahool at 555-swindled</p>
        </div>
      </div>
    );
  }
}

export default Contact;
