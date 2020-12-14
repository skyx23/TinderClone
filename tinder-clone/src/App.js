import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import Swipebuttons from './Swipebuttons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <Swipebuttons />
    </div>
  );
}

export default App;
