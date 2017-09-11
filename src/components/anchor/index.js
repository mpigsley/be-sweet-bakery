import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function Anchor(props) {
  const { href, to, children } = props;
  if (href) {
    return (
      <a {...props} className="Anchor" href={href}>
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link {...props} className="Anchor" to={to}>
        {children}
      </Link>
    );
  }
  return null;
}

Anchor.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Anchor.defaultProps = {
  href: null,
  to: null,
};
