import React from 'react';
import './NutritionResults.css';

export default function NutritionResults({ food, search }) {
  const loaded = () => {
    if (food) {
      return (
        <div className='nutrition-results'>
          {search}
          <p>Calories: {food.calories}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      );
    }
  };
  const loading = () => {
    return <div className='nutrition-results'>Loading...</div>;
  };
  return search ? loaded() : loading();
}
