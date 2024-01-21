import React from 'react';
import * as recipesAPI from '../../utilities/recipes-api';

export default function RecipeInfo({ recipe, recipeID }) {
  let recipeData = {
    name: recipe.recipe.label,
    calories: recipe.recipe.calories,
    recipeId: recipeID,
    link: recipe.recipe.url,
    image: recipe.recipe.image,
    ingredients: recipe.recipe.ingredientLines,
    cuisineType: '',
    dishType: '',
  };
  const submitRecipe = () => {
    // e.preventDefault();
    try {
    } catch {}
  };
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
