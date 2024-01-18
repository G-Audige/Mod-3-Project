import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// Hooks
import { useState } from 'react';
// Pages
import AuthPage from '../../pages/AuthPage/AuthPage';
import IngredientSearchPage from '../../pages/IngredientSearchPage/IngredientSearchPage';
import RecipeSearchPage from '../../pages/RecipeSearchPage/RecipeSearchPage';
import UserAccountPage from '../../pages/UserAccountPage/UserAccountPage';
import MainPage from '../../pages/MainPage/MainPage';

export default function Content() {
  const [user, setUser] = useState(getUser());
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
