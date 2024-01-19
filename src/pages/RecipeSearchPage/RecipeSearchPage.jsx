import React from 'react';
// Components
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchButtons from '../../components/SearchButtons/SearchButtons';
// Hooks
import { useState, useEffect } from 'react';
// .env Variables
const id = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;

export default function RecipeSearchPage() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(null);
  const getRecipes = async (searchterm) => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchterm}&app_id=${id}&app_key=${key}`;
    const options = {
      methods: 'GET',
      headers: {},
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRecipes(result);
      console.log(result);
      console.log(searchterm);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (search) {
      console.log('Search on useEffect:', search);
      getRecipes(search);
    }
  }, [search]);

  const position = {
    top: 0,
    bottom: 1,
  };
  return (
    <div>
      RecipeSearchPage
      <RecipeForm getRecipe={getRecipes} setSearch={setSearch} />
      {search ? (
        <div>
          <SearchButtons position={position.top} />
          <SearchResults items={recipes} />
          <SearchButtons position={position.bottom} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
