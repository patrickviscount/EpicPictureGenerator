import logo from './logo.svg';
import './App.css';
import React from 'react';
import {setState} from 'react';
const URL = "https://source.unsplash.com/random";

function App() {

  const [picture, setPicture] = React.useState(logo);

  function handleClick() {
    fetch(URL).then(e => setPicture(e.url));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
        <p>
          Get a cooler new epic picture.
        </p>
        <button onClick={handleClick}>New Picture</button>
      </header>
    </div>
  );
}

export default App;
