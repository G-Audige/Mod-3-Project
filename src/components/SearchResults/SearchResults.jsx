import './SearchResults.css';
import React from 'react';
// Components
import RecipeInfo from '../RecipeInfo/RecipeInfo';
// Contexts
import { APIContext } from '../../contexts/APIContext';
import { SearchContext } from '../../contexts/SearchContexts';
// Hooks
import { useContext, useState, useEffect } from 'react';
// .env Variables
const id = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const key = process.env.REACT_APP_EDAMAM_API_KEY;

export default function SearchResults() {
  const { recipes } = useContext(APIContext);
  const [dish, setDish] = useState('');
  const [recipeID, setRecipeID] = useState('');
  const { search, index, setIndex } = useContext(SearchContext);
  const handleClick = (i) => {
    setIndex(i);
    const sections = recipes.hits[i].recipe.uri.split('_');
    // setRecipeID(sections[1]);
    console.log('ID:', sections[1]);
    console.log(recipes.hits[i]);
  };
  // const getDish = async (recID) => {
  //   const url = `https://api.edamam.com/api/recipes/v2/${recID}?type=public&app_id=${id}&app_key=${key}`;
  //   const options = {
  //     methods: 'GET',
  //     headers: {},
  //   };
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     setDish(result);
  //     console.log('ID in fetch:', recID);
  //     console.log('URI search:', result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getDish(recipeID);
  // }, [recipeID]);

  const loaded = () => {
    if (recipes) {
      let data = recipes.hits;
      return (
        <div className='display'>
          <div className='recipes'>
            {data.map((rec, i) => {
              return (
                <div className='recipe' key={i} onClick={() => handleClick(i)}>
                  <img src={rec.recipe.image} />
                  <p>{rec.recipe.label}</p>
                  <p>{i + 1}</p>
                </div>
              );
            })}
          </div>
          {index ? (
            <div className='selected-recipe'>
              <RecipeInfo recipe={data[index]} />
            </div>
          ) : (
            <div style={{ display: 'none' }}></div>
          )}
        </div>
      );
    } else {
      return loading();
    }
  };
  const loading = () => {
    return <div>Loading...</div>;
  };
  return search ? loaded() : loading();
}
