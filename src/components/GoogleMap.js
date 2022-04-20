import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import '../App.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
};
class MyMap extends Component {
  render() {
    const { locationData } = this.props;
    return (
      <LoadScript
        googleMapsApiKey={process.env.MY_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: locationData.latitude,
            lng: locationData.longitude,
          }}
          zoom={10}
        >
          <Marker
            position={{
              lat: locationData.latitude,
              lng: locationData.longitude,
            }}
          />
        </GoogleMap>
      </LoadScript>
    );
  }
}

MyMap.propTypes = {
  locationData: PropTypes.object,
};

export default MyMap;