import React from 'react';
import './SearchButtons.css';

export default function SearchButtons(props) {
  return (
    <div
      className='buttons'
      id={props.position === 0 ? 'upper-buttons' : 'lower-buttons'}
    >
      <button
        // onClick={props.action.decrement}
        id={props.position === 0 ? 'top-previous-btn' : 'bottom-previous-btn'}
      >
        Previous
      </button>
      <button
        // onClick={props.action.increment}
        id={props.position === 0 ? 'top-next-btn' : 'bottom-next-btn'}
      >
        Next
      </button>
    </div>
  );
}
