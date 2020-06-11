import React, { useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { func, object } from 'prop-types';
import { GOOGLE_API_KEY } from '../../constants';

const mapStyles = {
  position: 'relative',
  width: '100%',
  height: 'calc(70% - 55px)',
  marginTop: '55px',
};

const MapContainer = ({ getWeather, setLocation, location, google }) => {
  const getPosition = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLocation({ lat: latitude, lng: longitude });
    getWeather(latitude, longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  }, []);

  const onClickMap = (mapProps, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLocation({ lat, lng });
    getWeather(lat, lng);
  };

  return (
    <Map
      style={mapStyles}
      google={google}
      zoom={13}
      onClick={onClickMap}
      center={location}
      initialCenter={location}
    >
      <Marker position={location} />
    </Map>
  );
};

MapContainer.propTypes = {
  getWeather: func.isRequired,
  setLocation: func.isRequired,
  location: object.isRequired,
  google: object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapContainer);
