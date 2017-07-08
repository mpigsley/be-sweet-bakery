import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './style.css';

const Title = ({ location }) => {
  if (location.pathname !== '/') {
    return null;
  }
  return (
    <h1>Be Sweet Bakery</h1>
  );
}

Title.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withRouter(Title);
