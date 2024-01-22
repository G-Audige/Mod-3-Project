import React from 'react';
import './NutritionResults.css';

export default function NutritionResults({ food, search }) {
  const loadCautions = () => {
    food.cautions.map((label) => {
      return <p>{label}</p>;
    });
  };
  const loaded = () => {
    if (food) {
      return (
        <div className='nutrition-results'>
          {search}
          <p>Calories: {food.calories}</p>
          <div>
            <h3>Cautions</h3>
            {food.cautions.length === 0 ? <p>None</p> : loadCautions()}
          </div>
          <div className='facts'>
            <div>
              <h3>Diet Labels</h3>
              {food.dietLabels.map((label) => {
                return <div>{label}</div>;
              })}
            </div>
            <div>
              <h3>Health Labels</h3>
              {food.healthLabels.map((label) => {
                return <div>{label}</div>;
              })}
            </div>
            <div>
              <h3>Daily Value</h3>
              <ul>
                {Object.keys(food.totalDaily).map((key) => {
                  const { label, quantity, unit } = food.totalDaily[key];
                  return (
                    <li key={key}>
                      <strong>{label}:</strong> {quantity.toFixed(2)} {unit}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Total Nutrients</h3>
              <ul>
                {Object.keys(food.totalNutrients).map((key) => {
                  const { label, quantity, unit } = food.totalNutrients[key];
                  return (
                    <li key={key}>
                      <strong>{label}:</strong> {quantity.toFixed(2)} {unit}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };
  const loading = () => {
    return <div className='nutrition-results'>Loading...</div>;
  };
  return search ? loaded() : loading();
}
