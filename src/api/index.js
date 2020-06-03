import axios from 'axios';

export const getWeatherRequest = ({ lat, lng }) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?appid=613046bb3be5c9e3c8c2e0ef6dabe3ef&lat=${lat}&lon=${lng}&units=metric`
  );
};
