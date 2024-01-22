import React from 'react';
import UserNav from '../../components/UserNav/UserNav';
import UserRecipeBook from '../../components/UserRecipeBook/UserRecipeBook';

export default function UserRecipeBookPage() {
  return (
    <div className='user-account-page'>
      <div>
        <UserNav />
      </div>
      <div className='user-info'>
        <h1>User Recipe Book Page</h1>
        <UserRecipeBook />
      </div>
    </div>
  );
}
