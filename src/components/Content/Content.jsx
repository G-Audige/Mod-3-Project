import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Pages
import AuthPage from '../../pages/AuthPage/AuthPage';
import IngredientSearchPage from '../../pages/IngredientSearchPage/IngredientSearchPage';
import MainPage from '../../pages/MainPage/MainPage';
import RecipeSearchPage from '../../pages/RecipeSearchPage/RecipeSearchPage';
import UserAccountPage from '../../pages/UserAccountPage/UserAccountPage';
import UserRecipeBookPage from '../../pages/UserRecipeBookPage/UserRecipeBookPage';
import UserShoppingListPage from '../../pages/UserShoppingListPage.jsx/UserShoppingListPage';

export default function Content() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search/ingredients' element={<IngredientSearchPage />} />
        <Route path='/search/recipes' element={<RecipeSearchPage />} />
      </Routes>
      {user ? (
        <Routes>
          <Route path='/user' element={<UserAccountPage />} />
          <Route path='/user/book' element={<UserRecipeBookPage />} />
          <Route path='/user/shoppinglist' element={<UserShoppingListPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/user' element={<AuthPage setUser={setUser} />} />
          <Route path='/user/book' element={<AuthPage setUser={setUser} />} />
          <Route
            path='/user/shoppinglist'
            element={<AuthPage setUser={setUser} />}
          />
        </Routes>
      )}
    </div>
  );
}
