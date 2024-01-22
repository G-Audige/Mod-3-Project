import './SearchResults.css';
import React from 'react';
// Components
import RecipeInfo from '../RecipeInfo/RecipeInfo';
// Contexts
import { APIContext } from '../../contexts/APIContext';
import { SearchContext } from '../../contexts/SearchContexts';
// Hooks
import { useContext, useState } from 'react';

export default function SearchResults() {
  const [recipeID, setRecipeID] = useState('');
  const { recipes } = useContext(APIContext);
  const { search, index, setIndex } = useContext(SearchContext);
  const handleClick = (i) => {
    setIndex(i);
    const sections = recipes.hits[i].recipe.uri.split('_');
    setRecipeID(sections[1]);
    // console.log('ID:', sections[1]);
    console.log(recipes.hits[i]);
  };

  const loaded = () => {
    if (recipes) {
      let data = recipes.hits;
      return (
        <div className='display'>
          <div className='recipes'>
            {data.map((rec, i) => {
              return (
                <div className='recipe' key={i} onClick={() => handleClick(i)}>
                  <img src={rec.recipe.image} alt={rec.recipe.label} />
                  <p>{rec.recipe.label}</p>
                  <p>{i + 1}</p>
                </div>
              );
            })}
          </div>
          {index ? (
            <div className='selected-recipe'>
              <RecipeInfo recipe={data[index]} recipeID={recipeID} />
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
