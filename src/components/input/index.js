import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default function Input(props) {
  if (props.type === 'textarea') {
    const { type, ...rest } = props;
    return (
      <textarea {...rest} className={classNames('Input', props.className)} />
    );
  }
  return <input {...props} className={classNames('Input', props.className)} />;
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: null,
};
