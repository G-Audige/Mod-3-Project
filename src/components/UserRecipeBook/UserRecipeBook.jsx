import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';

export default function UserRecipeBook() {
  const [book, setBook] = useState(null);
  useEffect(function () {
    async function getBook() {
      const book = await booksAPI.getBook();
      setBook(book);
    }
    getBook();
    console.log(book);
  }, []);
  return <div>UserRecipeBook</div>;
}
