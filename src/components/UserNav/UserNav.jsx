import React from 'react';
// Components
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link } from 'react-router-dom';

export default function UserNav() {
  return (
    <div>
      <div>
        <Link to='/user'>User Info</Link>
        <Link to='/user/book'>Recipe Book</Link>
        <Link to='/user/shoppinglist'>Shopping List</Link>
        <UserLogOut />
      </div>
    </div>
  );
}
