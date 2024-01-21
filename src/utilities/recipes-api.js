import { sendRequest } from './send-request';

const BASE_URL = '/api/recipes';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function getById(recipeID) {
  return sendRequest(`${BASE_URL}/${recipeID}`);
}
