import React from 'react';
import './NutritionResults.css';

export default function NutritionResults({ food, search }) {
  const loaded = () => {
    if (food) {
      return (
        <div className="nutrition-results">
          <h2>{search}</h2>
          <p>
            <strong>Calories:</strong> {food.calories}
          </p>
          <div>
            {food.cautions.length === 0 ? (
              <p>
                <strong>Cautions:</strong> None
              </p>
            ) : (
              <div>
                <p>
                  {' '}
                  <strong>Cautions: </strong>
                  {food.cautions.map((label) => {
                    console.log(label);
                    return (
                      <span>
                        <>{label[0] + label.slice(1).toLowerCase()}</>
                      </span>
                    );
                  })}
                </p>
              </div>
            )}
          </div>
          <div className="facts">
            <div>
              <h3>Diet Labels</h3>
              <ul>
                {food.dietLabels.map((label) => {
                  return <li>{label[0] + label.slice(1).toLowerCase()}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Health Labels</h3>
              <ul>
                {food.healthLabels.map((label) => {
                  return <li>{label[0] + label.slice(1).toLowerCase()}</li>;
                })}
              </ul>
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
    return <div className="nutrition-results">Loading...</div>;
  };
  return search ? loaded() : loading();
}
