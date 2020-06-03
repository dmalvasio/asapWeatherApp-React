import React, { useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  position: 'relative',
  width: '100%',
  height: '75%',
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
      zoom={12}
      onClick={onClickMap}
      center={location}
    >
      <Marker position={location} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapContainer);
