import React from 'react';
import MapContainer from '../components/MapContainer';
import WeatherInfo from '../components/WeatherInfo';

const HomePage = () => {
  return (
    <div>
      <MapContainer />
      <WeatherInfo />
    </div>
  );
};

export default HomePage;
