import React from 'react';
import FavoriteItem from './FavoriteItem';
import { func } from 'prop-types';
import './favoriteItems.css';

const FavoriteItems = ({ getWeather, setLocation }) => {
  const favList = JSON.parse(localStorage.getItem(`Favorites`));

  return (
    <ul className="FavItems">
      {favList &&
        favList.map(({ city, country, lat, lng }) => (
          <FavoriteItem
            key={city}
            city={city}
            country={country}
            onClick={() => {
              getWeather(lat, lng);
              setLocation({ lat, lng });
            }}
          />
        ))}
    </ul>
  );
};

FavoriteItems.propTypes = {
  getWeather: func.isRequired,
  setLocation: func.isRequired,
};

export default FavoriteItems;
