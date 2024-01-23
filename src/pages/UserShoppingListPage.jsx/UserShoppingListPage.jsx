import React from 'react';
import UserNav from '../../components/UserNav/UserNav';
import UserShoppingList from '../../components/UserShoppingList/UserShoppingList';

export default function UserShoppingListPage() {
  return (
    <div className='user-account-page'>
      <div>
        <UserNav />
      </div>
      <div className='user-info'>
        <h1>Shopping List</h1>
        <UserShoppingList />
      </div>
    </div>
  );
}
