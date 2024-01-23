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
export function changeBoughtState(itemData) {
  console.log('0');
  return sendRequest(
    `${BASE_URL}/items/${itemData._id}/bought`,
    'POST',
    itemData
  );
}
