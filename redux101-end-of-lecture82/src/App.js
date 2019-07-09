import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';

function App() {
  return (
    <div className="App">
      <FrozenDept />
      <MeatDept />
      <ProduceDept />
    </div>
  );
}

export default App;
