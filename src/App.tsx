import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { ArrowRight } from './components/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button startIcon={<ArrowRight/>}>Применить</Button>
        <Button variant="outline">Отмена</Button>
      </header>
    </div>
  );
}

export default App;
