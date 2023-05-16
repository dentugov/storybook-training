import React from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';

import { Button } from 'primereact/button';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button >Button</Button>
      </header>
    </div>
  );
}

export default App;
