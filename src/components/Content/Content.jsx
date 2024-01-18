import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import AuthPage from '../../pages/AuthPage/AuthPage';
import IngredientSearchPage from '../../pages/IngredientSearchPage/IngredientSearchPage';
import RecipeSearchPage from '../../pages/RecipeSearchPage/RecipeSearchPage';
import UserAccountPage from '../../pages/UserAccountPage/UserAccountPage';
import MainPage from '../../pages/MainPage/MainPage';

export default function Content() {
  const user = null;
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
        </Routes>
      ) : (
        <Routes>
          <Route path='/user' element={<AuthPage />} />
        </Routes>
      )}
    </div>
  );
}
