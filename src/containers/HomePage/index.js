import React, { useState } from 'react';
import MapContainer from '../../components/MapContainer';
import WeatherInfo from '../../components/WeatherInfo';
import { getWeatherRequest } from '../../api/index';
import './HomePage.css';

const HomePage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({ lat: -33.0, lng: -56.0 });

  const getWeather = (lat, lng) => {
    getWeatherRequest({ lat, lng })
      .then((response) => {
        parserJson(response);
      })
      .catch((error) => console.log(error));
  };

  const parserJson = ({ data }) => {
    if (data) {
      const {
        name,
        sys: { country },
        weather,
        main: { temp, temp_min, temp_max },
      } = data;
      setWeatherData({
        city: name,
        country: country,
        weatherStatus: weather && weather[0].main,
        temp: Math.round(temp),
        minTemp: Math.round(temp_min),
        maxTemp: Math.round(temp_max),
      });
    }
  };

  const { city, country, weatherStatus, temp, minTemp, maxTemp } = weatherData;

  return (
    <div className="container">
      <MapContainer
        getWeather={getWeather}
        setLocation={setLocation}
        location={location}
      />
      <WeatherInfo
        city={city}
        country={country}
        weatherStatus={weatherStatus}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    </div>
  );
};

export default HomePage;
