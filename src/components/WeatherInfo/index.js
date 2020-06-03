import React from 'react';
import { string } from 'prop-types';
import './WeatherInfo.css';

const WeatherInfo = ({
  city,
  country,
  weatherStatus,
  temp,
  minTemp,
  maxTemp,
}) => {
  return (
    <div className="weatherInfo">
      <div className="locationInfo">
        {city}, {country}
      </div>
      <div className="weatherStyle">
        <span>{weatherStatus}</span>
        <span>{temp}°C</span>
        <span>Max: {maxTemp}°C</span>
        <span>Min: {minTemp}°C</span>
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
