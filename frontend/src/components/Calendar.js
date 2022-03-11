import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';

function Calendar(props) {
  return (
    <ContentHolder>
    <h1> This is our calendar page</h1>
    </ContentHolder>
  );
}

Calendar.propTypes = {
  window: PropTypes.func,
};

export default Calendar;