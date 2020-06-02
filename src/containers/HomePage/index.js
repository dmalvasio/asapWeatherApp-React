import React from 'react';
import Radium from 'radium';
import MapContainer from '../../components/MapContainer';
import WeatherInfo from '../../components/WeatherInfo';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <MapContainer />
      <WeatherInfo />
    </div>
  );
};

export default Radium(HomePage);
