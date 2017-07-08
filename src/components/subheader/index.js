import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

import Horizontal, { HorizontalType } from 'components/horizontal';

export default function SubHeader({ className, children }) {
  return (
    <div className={classNames('SubHeader', className)}>
      <Horizontal className="SubHeader-Horizontal" type={HorizontalType.light} />
      <div className="SubHeader-Content">{children}</div>
      <Horizontal className="SubHeader-Horizontal" type={HorizontalType.light} />
    </div>
  );
}

SubHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
