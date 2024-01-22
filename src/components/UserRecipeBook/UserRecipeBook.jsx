import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';

export default function UserRecipeBook() {
  const [book, setBook] = useState(null);

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

  return (
    <div>
      UserRecipeBook
      {book && book.pages.items ? (
        <div>{book.pages[0].items[0].label}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
