import React from 'react';
import logo from './logo.svg';
import './App.css';
import Code from './Components/Code';
import Decode from './Components/Decode';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Caesar Cipher</h1>
      </div>
      <div className="cipher-section">
        <Code />
        <Decode />
      </div>
    </div>
  );
}

export default App;
