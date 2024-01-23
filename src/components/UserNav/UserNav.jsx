import React from 'react';
// Components
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link } from 'react-router-dom';

export default function UserNav() {
  return (
    <div className='user-nav'>
      <div className='nav'>
        <Link to='/user'>
          <button>User Info</button>
        </Link>
      </div>
      <div className='nav'>
        <Link to='/user/book'>
          <button>Recipe Book</button>
        </Link>
      </div>
      <div className='nav'>
        <Link to='/user/shoppinglist'>
          <button>Shopping List</button>
        </Link>
      </div>
      <UserLogOut />
    </div>
  );
}
