import sendRequest from './send-request';

const BASE_URL = '/api/recipes';

export function getRecipeByID(ID) {
  return sendRequest(`${BASE_URL}/${ID}`);
}
