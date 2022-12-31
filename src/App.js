import { React, useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardDoge from './components/CardDoge';
import CardEth from './components/CardEth';

function App() {

  return (
    <div className="h-screen bg-gradient-to-b from-purple-400 to-purple-800">
      <div className='lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row md:items-center md:justify-center'>
        <Card />
        <CardEth />
        <CardDoge />
      </div>
    </div>
  );
}

export default App;
