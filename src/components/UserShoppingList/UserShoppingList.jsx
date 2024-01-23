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
  const changeCheck = async (ingr) => {
    console.log('checked:', ingr);
    try {
      const lis = await listsAPI.changeBoughtState(ingr);
      console.log('Changed check', lis);
    } catch (e) {
      console.log('Error');
    }
  };
  return (
    <div>
      {list?.ingredients[0]?.name ? (
        <div>
          Let's check off that shopping list!
          <ul>
            {list.ingredients.map((ingr, i) => {
              return (
                <p key={i}>
                  {ingr.name}
                  {ingr.bought ? (
                    <input
                      type='checkbox'
                      name='bought'
                      onClick={() => changeCheck(ingr)}
                      defaultChecked
                    />
                  ) : (
                    <input
                      type='checkbox'
                      name='bought'
                      onClick={() => changeCheck(ingr)}
                    />
                  )}
                </p>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className='nothing-to-see'>
          <p>
            Go find some some{' '}
            <Link to='/search/recipe'>
              <span>recipes</span>
            </Link>{' '}
            you may like.
          </p>
        </div>
      )}
    </div>
  );
}
