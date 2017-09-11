import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
      color: 'white'
    }
    let MyImage = {
        "borderRadius": "13rem",
        "height": "5rem",
        "width": "4rem"
      }
    return (
      <div className="App" style={backgroundshade}>
          <div className="App-header">
          <h2>      <img className="MyImage" style= {MyImage} alt="Master Rahool" src={require('./rahool.jpg')}/>
Master Rahool&apos;s Shop</h2>
          <p className="AppIntro">
            Powered by Glimmer
          </p>
        </div>
      </div>
    );
  }
}

export default App;
