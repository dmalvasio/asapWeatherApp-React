import axios from 'axios';
import { WEATHER_API_KEY, API_URL } from '../constants';

export const getWeatherRequest = ({ lat, lng }) => {
  return axios.get(
    `${API_URL}?appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lng}&units=metric`
  );
};
