import React from 'react';

export default function NutritionResults({ food, search }) {
  const loaded = () => {
    if (food) {
      return (
        <div>
          {search}
          <p>{food.calories}</p>
        </div>
      );
    }
  };
  const loading = () => {
    return <div>Loading...</div>;
  };
  return search ? loaded() : loading();
}
