import React from 'react';
import UserNav from '../../components/UserNav/UserNav';
import UserShoppingList from '../../components/UserShoppingList/UserShoppingList';

export default function UserShoppingListPage() {
  return (
    <div>
      <h1>User Shopping List Page</h1>
      <UserNav />
      <UserShoppingList />
    </div>
  );
}
