import './SearchResults.css';
import React from 'react';
// Contexts
import { APIContext } from '../../contexts/APIContext';
import { SearchContext } from '../../contexts/SearchContexts';
// Hooks
import { useContext, useState } from 'react';

export default function SearchResults({ items }) {
  const { recipes, setIndex } = useContext(APIContext);
  const { search } = useContext(SearchContext);
  const { displayedRecipe, setDisplayedRecipe } = useState(-1);

  const loaded = () => {
    const handleClick = (i) => {
      setDisplayedRecipe(i);
    };
    if (recipes) {
      let data = recipes.hits;
      return (
        <div className='display'>
          <div className='recipes'>
            {data.map((rec, i) => {
              return (
                <div className='recipe' onClick={() => handleClick(i)}>
                  <img src={rec.recipe.image} />
                  <p>{rec.recipe.label}</p>
                  <p>{i + 1}</p>
                </div>
              );
            })}
          </div>
          {displayedRecipe > -1 ? (
            <div className='selected-recipe'></div>
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
