import { sendRequest } from './send-request';

const Base_URL = '/api/books';

export function getBook() {
  return sendRequest(`${Base_URL}`);
}
export function addRecipeToBook(recipeData) {
  console.log('Books-api');
  return sendRequest(`${Base_URL}/recipes`, 'POST', recipeData);
}
export function deleteRecipeFromBook(recipeID) {
  return sendRequest(`${Base_URL}/recipes/${recipeID}/delete`, 'DELETE');
}
