import { sendRequest } from './send-request';

const Base_URL = '/api/books';

export function getBook() {
  console.log('Books-api getBook');
  return sendRequest(`${Base_URL}`);
}
export function addRecipeToBook(recipeData) {
  console.log('Books-api');
  return sendRequest(`${Base_URL}/recipes`, 'POST', recipeData);
}
export function deleteRecipeFromBook(recipeID) {
  return sendRequest(`${Base_URL}/recipes/${recipeID._id}/delete`, 'DELETE');
}
