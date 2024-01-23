import React from 'react';
import * as listsAPI from '../../utilities/shoppingLists-api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      Let's check off that shopping list!
      {list?.ingredients[0]?.name ? (
        <div>
          {list.ingredients.map((ingr) => {
            return (
              <p>
                {ingr.name}
                {ingr.bought ? (
                  <input type='checkbox' name='bought' defaultChecked />
                ) : (
                  <input type='checkbox' name='bought' />
                )}
              </p>
            );
          })}
        </div>
      ) : (
        <div>
          <Link to='/search/ingredients'>Ingredient Search</Link>
        </div>
      )}
    </div>
  );
}
