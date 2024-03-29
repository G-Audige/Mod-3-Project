import React from 'react';
// Hooks
import { useState } from 'react';

function RecipeForm({ setSearch }) {
  const [formData, setFormData] = useState({
    searchterm: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.searchterm) {
      setSearch(formData.searchterm);
    } else {
      window.location.reload();
    }
  };

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='on'
          name='searchterm'
          onChange={handleChange}
          placeholder='Search by name...'
          type='text'
          value={formData.searchterm}
          className='searchbar'
        />
        <button type='submit' className='searchButton'>
          Search
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;
