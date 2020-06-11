import React from 'react';
import { string, func } from 'prop-types';
import './favoriteItem.css';

const FavoriteItem = ({ city, country, onClick }) => (
  <li className="FavItem">
    <div onClick={onClick}>
      {city}, {country}
    </div>
  </li>
);

FavoriteItem.propTypes = {
  city: string.isRequired,
  country: string.isRequired,
  onClick: func.isRequired,
};

export default FavoriteItem;
