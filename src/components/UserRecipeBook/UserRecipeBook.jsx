import './UserRecipeBook.css';
import React from 'react';
import * as booksAPI from '../../utilities/books-api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const shiftIndex = {
    decrement: function () {
      if (index > 0) {
        setIndex((index) => index - 1);
      }
    },
    increment: function () {
      if (index < book?.pages.length - 1) {
        setIndex((index) => index + 1);
      }
    },
  };
  // const deleteRecipe = async () => {
  //   try {
  //     // eslint-disable-next-line
  //     const deleteRec = await booksAPI.deleteRecipeFromBook(book.pages[index]);
  //   } catch (e) {
  //     console.log('Error');
  //   }
  //   if (index === book.pages.length) {
  //     setIndex((index) => index - 1);
  //   }
  // };
  return (
    <div>
      {book?.pages[index]?.label ? (
        <div className='recipe-book'>
          <div className='buttons'>
            <button onClick={() => shiftIndex.decrement()}>Previous</button>
            <div>
              {index + 1} of {book?.pages.length}
            </div>
            <button onClick={() => shiftIndex.increment()}>Next</button>
          </div>

          <h3>{book.pages[index].label}</h3>
          <div className='recipe-book-info'>
            <div className='recipe-book-info-left'>
              <img
                src={book.pages[index].image}
                alt={book.pages[index].label}
              />
            </div>
            <div className='recipe-book-info-right'>
              <div className='clickers'>
                <div className='recipe-link'>
                  <a href={book.pages[index].link} target='_blank'>
                    Recipe instructions
                  </a>
                </div>
                {/* <div>
                  <button onClick={() => deleteRecipe()}>Delete Recipe</button>
                </div> */}
              </div>
              <div>
                <p>
                  <strong>Calories:</strong>{' '}
                  {Math.round(book.pages[index].calories)}
                </p>
              </div>
              <div className='ingredients'>
                <p>
                  <strong>Ingredients</strong>
                </p>
                <ul>
                  {book.pages[index].ingredients.map((ingr, i) => {
                    return <li key={i}>{ingr}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='nothing-to-see'>
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
