import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor(test: string) {
    super(test);
    this.test = test;
  }

  test: string;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h2>{process.env.REACT_APP_NAME}</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
