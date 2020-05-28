import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = { location: { lat: 0, lng: 0 } };
    this.onClickMap = this.onClickMap.bind(this);
  }

  onClickMap(mapProps, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.setState({ location: { lat, lng } });
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} onClick={this.onClickMap}>
        <Marker position={this.state.location} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapContainer);
