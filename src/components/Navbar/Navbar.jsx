import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { FaRegUserCircle } from 'react-icons/fa';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useContext } from 'react';

function Navbar() {
  const { user } = useContext(UserContext);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const handleMouseEnter = () => {
    setActiveDropdown(true);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(false);
  };
  return (
    <div className='navbar'>
      <div
        className='dropdown'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button>Menu</button>
        {activeDropdown && <DropdownMenu />}
      </div>

      <Link to='/'>
        <img src='CookbookLogo.png' alt='Cookbook' />
      </Link>
      <Link to='/user'>{user ? <p>User Page</p> : <p>Login</p>}</Link>
    </div>
  );
}

export default Navbar;
