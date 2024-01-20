import React from 'react';
import UserNav from '../../components/UserNav/UserNav';
import UserRecipeBook from '../../components/UserRecipeBook/UserRecipeBook';

export default function UserRecipeBookPage() {
  return (
    <div>
      <h1>User Recipe Book Page</h1>
      <UserNav />
      <UserRecipeBook />
    </div>
  );
}
