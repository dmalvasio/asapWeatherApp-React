import React from 'react';
import { string, number } from 'prop-types';

const WeatherInfo = ({ weatherStatus, temp, minTemp, maxTemp }) => {
  return (
    <div>
      <span>{weatherStatus}</span>
      <span>{temp}</span>
      <span>{maxTemp}</span>
      <span>{minTemp}</span>
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
  temp: number,
  minTemp: number,
  maxTemp: number,
};

export default WeatherInfo;
