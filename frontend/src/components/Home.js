import React from 'react';
import PropTypes from 'prop-types';

function Home(props) {
  return (
  
    <h1> This is our homepage</h1>

  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;