import './App.css';
import React from 'react';
import axios from 'axios';
// Components
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
// Hooks
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
