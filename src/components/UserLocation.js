import React from 'react';
import PropTypes from 'prop-types';

const UserLocation = ({ location }) => {
  return (
    <div>
      <h3 >{location.country_name}</h3>
      <h3>{location.city}</h3>
      <h3 >Latitude: {location.latitude === undefined ? <>No data</> : <>{Math.round(location.latitude * 1000) / 1000}</>}</h3>
      <h3 >Longitude: {location.longitude === undefined ? <>No data</> : <>{Math.round(location.longitude * 1000) / 1000}</>}</h3>
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