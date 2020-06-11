import React, { useState } from 'react';
import MapContainer from '../../components/MapContainer';
import WeatherInfo from '../../components/WeatherInfo';
import Header from '../../components/Navigation/Header';
import SideDrawer from '../../components/Navigation/SideDrawer';
import { getWeatherRequest } from '../../api/index';
import './homePage.css';

const HomePage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({ lat: -33.0, lng: -56.0 });
  const [sideDrawer, setSideDrawer] = useState(false);

  const addFavToLocalStorage = () => {
    const { city, country } = weatherData;
    const { lat, lng } = location;
    const newFavorite = {
      city,
      country,
      lat,
      lng,
    };
    const favs = JSON.parse(localStorage.getItem(`Favorites`)) || [];
    const result = favs.filter((fav) => fav.city === city);
    if (result.length === 0) {
      favs.push(newFavorite);
      localStorage.setItem(`Favorites`, JSON.stringify(favs));
    }
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer);
  };

  const getWeather = (lat, lng) => {
    getWeatherRequest({ lat, lng })
      .then((response) => {
        parserJson(response);
      })
      .catch(() =>
        alert("Oops! We couldn't get the weather information, try again later.")
      );
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
        temp: String(Math.round(temp)),
        minTemp: String(Math.round(temp_min)),
        maxTemp: String(Math.round(temp_max)),
      });
    }
  };

  const { city, country, weatherStatus, temp, minTemp, maxTemp } = weatherData;

  return (
    <div className="container">
      <Header drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        getWeather={getWeather}
        setLocation={setLocation}
        open={sideDrawer}
        onClosed={sideDrawerClosedHandler}
      />
      <MapContainer
        getWeather={getWeather}
        setLocation={setLocation}
        location={location}
      />
      <WeatherInfo
        addFav={addFavToLocalStorage}
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
