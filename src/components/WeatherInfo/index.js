import React from 'react';
import { string } from 'prop-types';
import './WeatherInfo.css';

const WeatherInfo = ({ weatherStatus, temp, minTemp, maxTemp }) => {
  return (
    <div className="weatherInfo">
      <div className="weatherStyle">
        <span>{weatherStatus}</span>
        <span>{temp}</span>
        <span>Max: {maxTemp}</span>
        <span>Min: {minTemp}</span>
      </div>
    </div>
  );
};

WeatherInfo.defaultProps = {
  weatherStatus: '-',
  temp: '-°C',
  minTemp: '-°C',
  maxTemp: '-°C',
};

WeatherInfo.propTypes = {
  weatherStatus: string,
  temp: string,
  minTemp: string,
  maxTemp: string,
};

export default WeatherInfo;
