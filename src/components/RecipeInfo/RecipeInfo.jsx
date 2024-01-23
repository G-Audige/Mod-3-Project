import React from 'react';
import './RecipeInfo.css';
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
    try {
      // eslint-disable-next-line
      const recipeInfo = await booksAPI.addRecipeToBook(recipeData);
    } catch (e) {
      console.log('Error');
    }
  };
  const submitIngredients = async () => {
    try {
      recipe.recipe.ingredientLines.map(async (item) => {
        // eslint-disable-next-line
        const ingredientsInfo = await listsAPI.addItemToList({
          name: item,
          recipe: recipe.recipe.label,
        });
      });
    } catch (e) {
      console.log('Error');
    }
    prompt(recipe.recipe.label, 'has been added to your book.');
  };
  const closeView = () => {
    setIndex(null);
  };
  return (
    <div className='recipe-info'>
      <h2>{recipe.recipe.label}</h2>
      <button onClick={() => closeView()} className='close-view'>
        X
      </button>
      <br />
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <p>Calories: {Math.round(recipe.recipe.calories)}</p>
      <div className='ingredients'>
        <ul>
          {recipe.recipe.ingredientLines.map((ing, i) => {
            return <li key={i}>{ing}</li>;
          })}
        </ul>
      </div>
      <a href={recipe.recipe.url} className='recipe-link'>
        Link to recipe
      </a>
      <br />
      <button onClick={() => submitRecipe()}>Add to Recipe Book</button>
      <br />
      <button onClick={() => submitIngredients()}>
        Add ingredients to shopping list
      </button>
    </div>
  );
}
