import React from 'react';
// Hooks
import { useState, useEffect } from 'react';
const id = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;

export default function RecipeSearchPage() {
  const [search, setSearch] = useState(null);
  const find = 'egg';
  const getSearch = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${find}&app_id=${id}&app_key=${key}`;
    const options = {
      methods: 'GET',
      headers: {},
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSearch();
  }, [search]);
  return (
    <div>
      RecipeSearchPage
      <form>
        <input type='text' />
        <input type='submit' />
      </form>
    </div>
  );
}
