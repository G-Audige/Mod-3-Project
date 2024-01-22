import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserRecipeBook() {
  const [book, setBook] = useState(null);
  const [index, setIndex] = useState(1);

  useEffect(function () {
    async function getBoo() {
      try {
        const boo = await booksAPI.getBook();
        setBook(boo);
        console.log('Retrieved boo:', boo);
      } catch (e) {
        console.error('Error fetching book:', e);
      }
    }
    getBoo();
    // eslint-disable-next-line
  }, []);
  const deleteRecipe = async () => {
    try {
      // eslint-disable-next-line
      const deleteRecipe = await booksAPI.deleteRecipeFromBook(
        book.pages[index]._id
      );
      if (index > 0) {
        setIndex(index--);
      }
    } catch (e) {
      console.log('Error');
    }
  };
  const shiftIndex = {
    decrement: function () {
      if (index > 0) {
        setIndex(index - 1);
      }
    },
    increment: function () {
      if (index < book?.pages.length - 1) {
        setIndex(index + 1);
      }
    },
  };

  return (
    <div>
      You have {book?.pages.length} recipes in your book.
      {book?.pages[index]?.items[0]?.label ? (
        <div>
          <button onClick={() => shiftIndex.decrement()}>Previous</button>
          <button onClick={() => shiftIndex.increment()}>Next</button>

          <h3>{book.pages[index].items[0].label}</h3>
          <img
            src={book.pages[index].items[0].image}
            alt={book.pages[index].items[0].label}
          />
          <br />
          <button onClick={() => deleteRecipe()}>Delete Recipe</button>
        </div>
      ) : (
        <div>
          <p>
            How about you look in the{' '}
            <Link to='/search/recipes'>
              <span>recipe search</span>
            </Link>{' '}
            to add recipes to your book?
          </p>
        </div>
      )}
    </div>
  );
}
