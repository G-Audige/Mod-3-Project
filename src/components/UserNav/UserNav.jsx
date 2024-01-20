import React from 'react';
// Components
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserRecipeBook from '../../components/UserRecipeBook/UserRecipeBook';
import UserShoppingList from '../../components/UserShoppingList/UserShoppingList';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function UserNav() {
  const { user, setUser } = useContext(UserContext);
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
