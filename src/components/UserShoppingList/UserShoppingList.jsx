import React from 'react';
import * as listsAPI from '../../utilities/shoppingLists-api';
import { useEffect, useState } from 'react';

export default function UserShoppingList() {
  const [list, setList] = useState(null);

  useEffect(function () {
    async function getList() {
      try {
        const lis = await listsAPI.getList();
        setList(lis);
        console.log('Retrieved list: ', lis);
      } catch (e) {
        console.error('Error fetching book:', e);
      }
    }
    getList();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      UserShoppingList
      {list ? <div></div> : <div></div>}
    </div>
  );
}
