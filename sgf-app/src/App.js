import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><img src="logo.jpg" className="sgf-logo" alt="logo" /></p>
          <h1 className="App-title">Welcome to Southern Grit Flavor!</h1>
        </header>
        <body>
          <p className="App-intro">
            Our site is currently under construction.
          </p>
          <p>
            Please email us at <a href="mailto:info@southerngritflavor.com">info@southerngritflavor.com</a>
          </p>
          <br/>
          <p>
            <a href="https://sacurrentflavor.com"><img src="flavor.png" className="flavor-logo" alt="San Antonio Flavor logo" /></a> Come see us at the San Antonio Flavor
          </p>
        </body>
      </div>
    );
  }
}

export default App;
