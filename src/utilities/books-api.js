import { sendRequest } from './send-request';

const Base_URL = '/api/book';

export function getBook() {
  return sendRequest(`${Base_URL}`);
}
export function addRecipeToBook(recipeData) {
  return sendRequest(`${Base_URL}/recipes`, 'POST', recipeData);
}
export function deleteRecipeFromBook(recipeID) {
  return sendRequest(`${Base_URL}/recipes/${recipeID}/delete`, 'DELETE');
}
