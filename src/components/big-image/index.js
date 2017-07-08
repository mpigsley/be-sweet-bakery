import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function BigImage({ className }) {
  return <div className={classNames('BigImage', className)} />;
}

BigImage.propTypes = {
  className: PropTypes.string,
};
