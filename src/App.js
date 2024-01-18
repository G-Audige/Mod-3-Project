import './App.css';
import React from 'react';
import axios from 'axios';
// Components
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
// Hooks
import { useState, useEffect } from 'react';

const apiKey = process.env.Petfinder_API_Key;
function App() {
  const [search, setSearch] = useState(null);
  // const getSearch = async () => {
  //   const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
  //       'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getSearch();
  // }, [search]);
  return (
    <div className='App'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
