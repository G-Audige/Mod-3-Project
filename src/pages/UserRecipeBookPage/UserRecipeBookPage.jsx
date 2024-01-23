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
        <h1>Recipe Book</h1>
        <UserRecipeBook />
      </div>
    </div>
  );
}
