import React from 'react';
// Components

import SearchResults from '../../components/SearchResults/SearchResults';
import SearchButtons from '../../components/SearchButtons/SearchButtons';
// Hooks
import { useState, useEffect } from 'react';
const id = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;

export default function RecipeSearchPage() {
  const [search, setSearch] = useState('egg');
  const [recipes, setRecipes] = useState(null);
  const getRecipe = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${id}&app_key=${key}`;
    const options = {
      methods: 'GET',
      headers: {},
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRecipes(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRecipe();
  }, [search]);

  const position = {
    top: 0,
    bottom: 1,
  };
  return (
    <div>
      RecipeSearchPage
      <form>
        <input type='text' />
        <input type='submit' />
      </form>
      <SearchButtons position={position.top} />
      <SearchResults items={recipes} />
      <SearchButtons position={position.bottom} />
    </div>
  );
}
