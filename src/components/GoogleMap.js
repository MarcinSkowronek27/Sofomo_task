import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const containerStyle = {
  width: '100%',
  height: '100%',
};

// const center = {
//   lat: 51.937,
//   lng: 15.478,
// };

// const onLoad = marker => {
//   console.log('marker: ', marker);
// };

class MyMap extends Component {
  render() {
    const { locationData } = this.props;
    // console.log('locationData', Math.round(locationData.longitude * 1000) / 1000, locationData.longitude);
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyARjmtGWUw3Gbbfn-8Ca4EfNxKChBb46R8"
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
            // onLoad={onLoad}
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