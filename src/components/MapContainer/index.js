import React, { useState, useEffect } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  position: 'relative',
  width: '100%',
  height: '75%',
};

const MapContainer = (props) => {
  const [location, setLocation] = useState({ lat: -33.0, lng: -56.0 });

  const getPosition = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLocation({ lat: latitude, lng: longitude });
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
  };

  return (
    <Map
      style={mapStyles}
      google={props.google}
      zoom={14}
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
