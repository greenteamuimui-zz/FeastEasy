import React from 'react';
import { Link } from 'react-router-dom';

const KitchenDetailHeader = ({kitchen,addFavorite}) => {
  console.log(kitchen);
  return (
    <header>
      <h1>
        {kitchen.name}
      </h1>
      <h2>
        {kitchen.cuisine}
      </h2>
      <h3>
        {kitchen.overall_score}
      </h3>
      <button onClick={addFavorite}>
        Favorite
      </button>
    </header>
  );

};

export default KitchenDetailHeader;
