import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function Form(props) {
  return <form {...props} className={classNames('Form', props.className)} />;
}

Form.propTypes = {
  className: PropTypes.string,
};

Form.defaultProps = {
  className: null,
};
