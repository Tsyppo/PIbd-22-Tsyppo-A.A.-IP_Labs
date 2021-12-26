import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>***</h3>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Tsyppo Anton 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter start={0} step={5} />
      </header>
    </div>
  );
}

export default App;
