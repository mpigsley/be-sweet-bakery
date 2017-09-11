import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import colorfulFlowers from 'images/colorful_flowers.jpg';

import './style.css';

const Title = ({ location }) => {
  if (location.pathname !== '/') {
    return null;
  }
  return (
    <div
      className="Title"
      style={{ backgroundImage: `url(${colorfulFlowers})` }}
    >
      <div className="Title-Filter">
        <div className="Title-Container">
          <div className="content animated fadeInDown">
            <h1 className="Title-Major">Be Sweet</h1>
            <h2 className="Title-Minor">····· bakery ·····</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Title);
