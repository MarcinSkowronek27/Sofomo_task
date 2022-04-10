import React from 'react';
import PropTypes from 'prop-types';

const UserLocation = ({ location }) => {
  return (
    <div>
      {/* <center><h3>Information about user location:</h3></center> */}
      {/* <div> */}
      <h3 >{location.country_name}</h3>
      <h3>{location.city}</h3>
      <h3 >Latitude: {Math.round(location.latitude * 1000) / 1000}</h3>
      <h3 >Longitude: {Math.round(location.longitude * 1000) / 1000}</h3>
      {/* </div> */}
    </div>
  );
};

UserLocation.propTypes = {
  location: PropTypes.object,
  country_name: PropTypes.string,
  city: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default UserLocation;