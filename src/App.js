import './App.css';
import React from 'react';
// Components
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
// Contexts
import { APIContext } from './contexts/APIContext';
import { SearchContext } from './contexts/SearchContexts';
import { UserContext } from './contexts/UserContext';
// Hooks
import { useState } from 'react';
import { getUser } from './utilities/users-service';

function App() {
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(0);
  const [recipes, setRecipes] = useState('');
  const [user, setUser] = useState(getUser());
  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <SearchContext.Provider value={{ search, setSearch, index, setIndex }}>
          <APIContext.Provider value={{ recipes, setRecipes }}>
            <Navbar />
            <Content />
          </APIContext.Provider>
        </SearchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
