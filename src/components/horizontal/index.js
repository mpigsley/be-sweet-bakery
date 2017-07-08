import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export const HorizontalType = {
  light: 'light',
  dark: 'dark',
};

export default function Horizontal({ type, className }) {
  return (
    <hr
      className={classNames('Horizontal', className, {
        'Horizontal-Light': type === HorizontalType.light,
        'Horizontal-Dark': type === HorizontalType.dark,
      })}
    />
  )
}

Horizontal.propTypes = {
 type: PropTypes.oneOf(Object.keys(HorizontalType)),
 className: PropTypes.string,
};

Horizontal.defaultProps = {
  type: HorizontalType.light,
};
