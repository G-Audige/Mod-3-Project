import React from 'react';
// Components
import UserInfo from '../../components/UserInfo/UserInfo';
import UserRecipeBook from '../../components/UserRecipeBook/UserRecipeBook';
import UserShoppingList from '../../components/UserShoppingList/UserShoppingList';
// Hooks
import { Route, Routes } from 'react-router-dom';

export default function UserSections() {
  return (
    <div>
      <Routes>
        <Route path={'/user/info'} element={<UserInfo />} />
        <Route path={'/user/book'} element={<UserRecipeBook />} />
        <Route path={'/user/shoppinglist'} element={<UserShoppingList />} />
      </Routes>
    </div>
  );
}
