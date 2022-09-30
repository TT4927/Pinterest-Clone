import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Header />
      <Mainboard />
    </div>
  );
}

export default App;

// import { rootShouldForwardProp } from '@mui/material/styles/styled';
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myFirstElement = React.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
