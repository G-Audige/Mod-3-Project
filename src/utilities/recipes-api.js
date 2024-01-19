import sendRequest from './send-request';

const BASE_URL = '/api/recipes';

export function getBook() {
  return sendRequest(`${BASE_URL}/book`);
}

export function addRecipeToBook() {}
