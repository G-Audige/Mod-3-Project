import React from 'react';
// Components
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link } from 'react-router-dom';

export default function UserNav() {
  return (
    <div className='user-nav'>
      <div className='nav'>
        <Link to='/user'>User Info</Link>
      </div>
      <div className='nav'>
        <Link to='/user/book'>Recipe Book</Link>
      </div>
      <div className='nav'>
        <Link to='/user/shoppinglist'>Shopping List</Link>
      </div>
      <UserLogOut />
    </div>
  );
}
