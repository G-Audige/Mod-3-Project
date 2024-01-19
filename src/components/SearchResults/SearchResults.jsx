import React from 'react';

export default function SearchResults({ items }) {
  const loaded = () => {
    let data = items.hits;
    return (
      <div>
        {data.map((rec) => {
          return <div>{rec.recipe.label}</div>;
        })}
      </div>
    );
  };
  const loading = () => {
    return <div>Loading...</div>;
  };
  return items ? loaded() : loading();
}
