import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';

export default function UserRecipeBook() {
  const [book, setBook] = useState(null);

  useEffect(function () {
    async function getBoo() {
      try {
        const boo = await booksAPI.getBook();
        console.log(boo);
        setBook(boo);
        console.log('Retrieved boo:', boo);
      } catch (e) {
        console.error('Error fetching book:', e);
      }
    }
    getBoo();
    console.log('Retrieved book:', book);
  }, []);

  return (
    <div>
      UserRecipeBook
      {book ? <div>{book.pages[0].items[0].label}</div> : <div></div>}
    </div>
  );
}
