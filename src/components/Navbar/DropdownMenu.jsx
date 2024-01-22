import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  return (
    <div className='dropdown-menu'>
      <ul>
        <li>
          <Link to='/search/ingredients'>Ingredient Search</Link>
        </li>
        <li>
          <Link to='/search/recipes'>Recipe Search</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
