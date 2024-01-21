import { sendRequest } from './send-request';

const Base_URL = '/api/book';

export function getBook() {
  return sendRequest(`${Base_URL}`);
}
export function addRecipeToBook(recipeId) {
  return sendRequest(`${Base_URL}/recipes/${recipeId}`, 'POST');
}
export function deleteRecipeFromBook(recipeID) {
  return sendRequest(`${Base_URL}/recipes/${recipeID}/delete`, 'DELETE');
}
