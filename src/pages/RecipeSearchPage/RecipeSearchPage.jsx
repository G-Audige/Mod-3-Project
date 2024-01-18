import React from 'react';
// Hooks
import { useState, useEffect } from 'react';

export default function RecipeSearchPage() {
  const [search, setSearch] = useState(null);
  // const getSearch = async () => {
  //   const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
  //       'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getSearch();
  // }, [search]);
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
