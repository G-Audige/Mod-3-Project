import React from 'react';

export default function RecipeInfo({ recipe }) {
  const submitRecipe = () => {};
  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} />
      <p>Calories: {Math.round(recipe.recipe.calories)}</p>
      <div className='ingredients'>
        <ul>
          {recipe.recipe.ingredientLines.map((ing) => {
            return <li>{ing}</li>;
          })}
        </ul>
      </div>
      <a href={recipe.recipe.url}>Link to recipe</a>
      <button onClick={submitRecipe()}>Add to Recipe Book</button>
    </div>
  );
}
