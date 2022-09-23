import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainboard />
    </div>
  );
}

export default App;
