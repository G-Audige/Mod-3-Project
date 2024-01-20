import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useState } from 'react';
// Pages
import AuthPage from '../../pages/AuthPage/AuthPage';
import IngredientSearchPage from '../../pages/IngredientSearchPage/IngredientSearchPage';
import RecipeSearchPage from '../../pages/RecipeSearchPage/RecipeSearchPage';
import UserAccountPage from '../../pages/UserAccountPage/UserAccountPage';
import MainPage from '../../pages/MainPage/MainPage';

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
          <Route
            path='/user'
            element={<UserAccountPage user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path='/user' element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </div>
  );
}
