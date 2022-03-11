import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';

function CreateEvent(props) {
  return (
   <ContentHolder>
    <h1> This is our create events page</h1>
    </ContentHolder>
  );
}

CreateEvent.propTypes = {
  window: PropTypes.func,
};

export default CreateEvent;