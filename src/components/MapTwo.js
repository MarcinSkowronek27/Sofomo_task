import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 51.937,
  lng: 15.478,
};

const onLoad = marker => {
  console.log('marker: ', marker);
};

class MyMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyARjmtGWUw3Gbbfn-8Ca4EfNxKChBb46R8"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            onLoad={onLoad}
            position={center}
          />
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MyMap;