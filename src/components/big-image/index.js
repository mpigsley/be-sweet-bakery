import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function BigImage({ className, src }) {
  return (
    <div
      className={classNames('BigImage', className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

BigImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

BigImage.defaultProps = {
  className: null,
};
