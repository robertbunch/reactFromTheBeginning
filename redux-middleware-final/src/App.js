import React from 'react';
import Weather from './Weather';
import WarmOrNot from './WarmOrNot';
import './App.css';

function App() {
  return (
    <div className="App">
      <WarmOrNot />
      <Weather />
    </div>
  );
}

export default App;
