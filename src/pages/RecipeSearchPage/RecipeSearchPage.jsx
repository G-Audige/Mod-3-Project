import './RecipeSearchPage.css';
import React from 'react';
// Components
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import SearchResults from '../../components/SearchResults/SearchResults';
// Contexts
import { APIContext } from '../../contexts/APIContext';
import { SearchContext } from '../../contexts/SearchContexts';
// Hooks
import { useEffect, useContext } from 'react';
// .env Variables
const id = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;

export default function RecipeSearchPage() {
  const { search, setSearch } = useContext(SearchContext);
  const { recipes, setRecipes } = useContext(APIContext);

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
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className='recipe-search-page'>
      <h1>Recipe Search</h1>
      <RecipeForm getRecipe={getRecipes} setSearch={setSearch} />
      {search ? (
        <div>
          <SearchResults items={recipes} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
