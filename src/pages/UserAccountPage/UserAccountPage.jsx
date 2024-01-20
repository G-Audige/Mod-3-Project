import React from 'react';
// Components
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserNav from '../../components/UserNav/UserNav';
import UserRecipeBook from '../../components/UserRecipeBook/UserRecipeBook';
import UserShoppingList from '../../components/UserShoppingList/UserShoppingList';
// Hooks
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function UserAccountPage({ user, setUser }) {
  return (
    <div>
      UserAccountPage
      <UserNav user={user} setUser={setUser} />
      <div>
        <Link to='/user'>User Info</Link>
        <Link to='/user/book'>Recipe Book</Link>
        <Link to='/user/shoppinglist'>Shopping List</Link>
        <UserLogOut user={user} setUser={setUser} />
      </div>
      <div>
        <Routes>
          <Route path={'/user'} element={<UserInfo />} />
          <Route path={'/user/book'} element={<UserRecipeBook />} />
          <Route path={'/user/shoppinglist'} element={<UserShoppingList />} />
        </Routes>
      </div>
    </div>
  );
}
