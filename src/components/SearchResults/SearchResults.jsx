import React from 'react';

export default function SearchResults({ items }) {
  const loaded = () => {
    let data = items.hits;
  };
  const loading = () => {};
  return items ? <>{items.hits[0].recipe.label}</> : <>Loading</>;
}
