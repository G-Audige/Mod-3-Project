import React from 'react';
import * as booksAPI from '../../utilities/books-api';

export default function RecipeInfo({ recipe, recipeID }) {
  let recipeData = {
    name: recipe.recipe.label,
    calories: recipe.recipe.calories,
    recipeId: recipeID,
    link: recipe.recipe.url,
    image: recipe.recipe.image,
    ingredients: recipe.recipe.ingredientLines,
    cuisineType: recipe.recipe.cuisineType,
    dishType: recipe.recipe.dihType,
  };
  const submitRecipe = async () => {
    // preventDefault();
    try {
      const recipeInfo = await booksAPI.addRecipeToBook(recipeData);
      console.log(recipeInfo);
    } catch (e) {
      console.log('Error');
    }
  };
  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <p>Calories: {Math.round(recipe.recipe.calories)}</p>
      <div className='ingredients'>
        <ul>
          {recipe.recipe.ingredientLines.map((ing, i) => {
            return <li key={i}>{ing}</li>;
          })}
        </ul>
      </div>
      <a href={recipe.recipe.url}>Link to recipe</a>
      <button onClick={() => submitRecipe()}>Add to Recipe Book</button>
    </div>
  );
}
