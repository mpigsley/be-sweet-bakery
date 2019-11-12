import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from 'components/logo';

import './style.scss';

export default function Shop({ children }) {
  return (
    <div>
      <nav className="Navigation">
        <div className="container">
          <div className="row Navigation-Row">
            <div className="five columns Navigation-Column">
              <Link className="Navigation-Link" to="/about">
                About
              </Link>
              <Link className="Navigation-Link" to="/gallery">
                Gallery
              </Link>
            </div>
            <div className="two columns Navigation-Column">
              <Link className="Navigation-Logo Navigation-Link" to="/">
                <Logo />
              </Link>
            </div>
            <div className="five columns Navigation-Column">
              <Link className="Navigation-Link" to="/order">
                Order
              </Link>
              <Link className="Navigation-Link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

Shop.propTypes = {
  children: PropTypes.node.isRequired,
};
