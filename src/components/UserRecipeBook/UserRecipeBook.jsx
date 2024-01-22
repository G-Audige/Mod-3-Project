import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';

export default function UserRecipeBook() {
  const [book, setBook] = useState(null);
  const [index, setIndex] = useState(0);

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
        book.pages[0].items[index]
      );
    } catch (e) {
      console.log('Error');
    }
  };

  return (
    <div>
      You have {book?.pages.length} recipes in your book.
      {book?.pages[0]?.items[index]?.label ? (
        <div>
          <h3>{book.pages[0].items[index].label}</h3>
          <img
            src={book.pages[0].items[index].image}
            alt={book.pages[0].items[index].label}
          />
          <br />
          <button onClick={() => deleteRecipe()}>Delete Recipe</button>
        </div>
      ) : (
        <div>
          <p>
            How about you look in the recipe search to add recipes to your book?
          </p>
        </div>
      )}
    </div>
  );
}
