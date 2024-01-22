import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import * as listsAPI from '../../utilities/shoppingLists-api';
// Contexts
import { SearchContext } from '../../contexts/SearchContexts';
import { useContext } from 'react';

export default function RecipeInfo({ recipe, recipeID }) {
  const { setIndex } = useContext(SearchContext);
  let recipeData = {
    label: recipe.recipe.label,
    calories: recipe.recipe.calories,
    recipeId: recipeID,
    link: recipe.recipe.url,
    image: recipe.recipe.image,
    ingredients: recipe.recipe.ingredientLines,
    cuisineType: recipe.recipe.cuisineType,
    dishType: recipe.recipe.dishType,
  };
  const submitRecipe = async () => {
    // preventDefault();
    try {
      // console.log('Submit data');
      // console.log(recipeData);
      // console.log(recipeID);
      const recipeInfo = await booksAPI.addRecipeToBook(recipeData);
      // console.log(recipeInfo);
    } catch (e) {
      console.log('Error');
    }
  };
  const submitIngredients = async () => {
    try {
      recipe.recipe.ingredientLines.map(async (item) => {
        const ingredientsInfo = await listsAPI.addItemToList({
          name: item,
          recipe: recipe.recipe.label,
        });
        // console.log(ingredientsInfo);
      });

      // console.log(ingredientsInfo);
    } catch (e) {
      console.log('Error');
    }
  };
  const closeView = () => {
    setIndex(null);
  };
  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <button onClick={() => closeView()}>X</button>
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
      <button onClick={() => submitIngredients()}>
        Add ingredients to shopping list
      </button>
    </div>
  );
}
