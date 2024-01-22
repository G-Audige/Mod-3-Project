import React from 'react';
// Components
import NutritionForm from '../../components/NutritionForm/NutritionForm';
import NutritionResults from '../../components/NutritionResults/NutritionResults';
import SearchButtons from '../../components/SearchButtons/SearchButtons';
// Contexts
// Hooks
import { useEffect, useState } from 'react';
// .env Variables
// eslint-disable-next-line
const key = process.env.REACT_APP_EDAMAM_NUTRITION_API_KEY;

export default function IngredientSearchPage() {
  const [search, setSearch] = useState('');
  const [food, setFood] = useState('');
  const getFood = async (ingr) => {
    const url = `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${ingr}&nutrition-type=cooking`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
        'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setFood(result);
      console.log(search);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (search) {
      getFood(search);
    }
    // eslint-disable-next-line
  }, [search]);
  const position = {
    top: 0,
    bottom: 1,
  };
  return (
    <div>
      IngredientSearchPage
      <NutritionForm setSearch={setSearch} />
      {search ? (
        <div>
          <SearchButtons position={position.top} />
          <NutritionResults food={food} search={search} />
          <SearchButtons position={position.bottom} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
