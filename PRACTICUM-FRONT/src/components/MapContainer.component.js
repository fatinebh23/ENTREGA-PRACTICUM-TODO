import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
  // Coordenadas de Castellón
  const castellon = {
    lat: 39.9864,
    lng: -0.0513
  };
    const mapStyles = {
      //width: '50%',
      height: '400px',
      position: 'relative'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 39.9864,
          lng: -0.0513
        }}
      >
        <Marker position={{ lat: 39.9864, lng: -0.0513}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxoYtEWFof6nLE7_VJCaRqrpBFVK_SF4w'
})(MapContainer);
