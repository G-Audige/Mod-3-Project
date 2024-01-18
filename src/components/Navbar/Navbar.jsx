import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Main</Link>
      <Link to='/search/ingredients'>Ingredient Search</Link>
      <Link to='/search/recipes'>Recipe Search</Link>
      <Link to='/user'>User Page</Link>
    </div>
  );
}

export default Navbar;
