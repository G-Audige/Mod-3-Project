import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { FaRegUserCircle } from 'react-icons/fa';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const handleMouseEnter = () => {
    setActiveDropdown(true);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(false);
  };
  const dropdown = () => {};
  return (
    <div className='navbar'>
      <div
        className='dropdown'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button>Menu</button>
        {/* <DropdownMenu /> */}
        {activeDropdown && <DropdownMenu />}
      </div>

      <Link to='/'>
        <img src='CookbookLogo.png' />
      </Link>
      <Link to='/user'>User Page</Link>
    </div>
  );
}

export default Navbar;
