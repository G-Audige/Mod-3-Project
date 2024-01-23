import { sendRequest } from './send-request';

const BASE_URL = '/api/lists';

export function getList() {
  return sendRequest(`${BASE_URL}`);
}

export function addItemToList(itemData) {
  // console.log('ShoppingList-api', itemData);
  return sendRequest(`${BASE_URL}/items`, 'POST', itemData);
}

export function deleteItemFromList(itemID) {
  return sendRequest(`${BASE_URL}/items/${itemID}/delete`, 'DELETE');
}
export function changeBoughtState(itemID) {
  return sendRequest(`${BASE_URL}/items/${itemID}/bought`, 'POST');
}
