import './SearchResults.css';
import React from 'react';
// Contexts
import { APIContext } from '../../contexts/APIContext';
import { SearchContext } from '../../contexts/SearchContexts';
// Hooks
import { useContext, useState, useEffect } from 'react';

export default function SearchResults() {
  const { recipes } = useContext(APIContext);
  const { search, index, setIndex } = useContext(SearchContext);
  const handleClick = (i) => {
    setIndex(i);
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
                  <img src={rec.recipe.image} />
                  <p>{rec.recipe.label}</p>
                  <p>{i + 1}</p>
                </div>
              );
            })}
          </div>
          {index ? (
            <div className='selected-recipe'>{data[index].recipe.label}</div>
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
