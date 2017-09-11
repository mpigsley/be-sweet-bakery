import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function Label(props) {
  return (
    <label
      {...props}
      htmlFor={props.htmlFor}
      className={classNames('Label', props.className)}
    />
  );
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  className: null,
  htmlFor: null,
};
