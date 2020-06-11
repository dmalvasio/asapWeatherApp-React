import React from 'react';
import { string } from 'prop-types';
import './WeatherInfo.css';

const WeatherInfo = ({
  addFav,
  city,
  country,
  weatherStatus,
  temp,
  minTemp,
  maxTemp,
}) => {
  return (
    <div className="WeatherStyle">
      <div className="LocationInfo">
        {city}, {country}
      </div>
      <div className="WeatherInfoFlex">
        <div className="WeatherInfo">
          <span>{weatherStatus}</span>
          <span>{temp}°C</span>
          <span>Max: {maxTemp}°C</span>
          <span>Min: {minTemp}°C</span>
        </div>
        <div className="FavouriteBtn" onClick={addFav}>
          Add to favorites
        </div>
      </div>
    </div>
  );
};

WeatherInfo.defaultProps = {
  city: '-',
  country: '-',
  weatherStatus: '-',
  temp: '-',
  minTemp: '-',
  maxTemp: '-',
};

WeatherInfo.propTypes = {
  city: string,
  country: string,
  weatherStatus: string,
  temp: string,
  minTemp: string,
  maxTemp: string,
};

export default WeatherInfo;
