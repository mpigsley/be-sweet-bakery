import React from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';

import './style.css';

import Logo from 'components/logo';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <hr className="Footer-Row" />
        <div className="row">
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">We Cater</h5>
            <p className="Footer-Item">Available for events and bulk ordering</p>
            <p className="Footer-Item">
              <Link className="Footer-Link" to="/about">Find out more</Link>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Contact</h5>
            <p className="Footer-Item">
              <a className="Footer-Link" href="mailto:besweetomaha@gmail.com" target="_top">besweetomaha@gmail.com</a>
            </p>
            <p className="Footer-Item">
              <a className="Footer-Link" href="tel://1-402-658-8810">1-402-658-8810</a>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle Footer-Connect">Connect</h5>
            <p className="Footer-Item">
              <a className="Footer-Link" href="https://www.facebook.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-facebook" />
              </a>
              <a className="Footer-Link" href="https://twitter.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-twitter" />
              </a>
            </p>
          </div>
        </div>
        <hr className="Footer-Row" />
        <div className="row">
          <div className="Footer-Info five columns">
            <Link className="Footer-Link" to="/about">About</Link>
            <span className="Footer-Spacer">·</span>
            <Link className="Footer-Link" to="/">Privacy Policy</Link>
            <span className="Footer-Spacer">·</span>
            <Link className="Footer-Link" to="/shop">Contact</Link>
          </div>
          <div className="two columns">
            <Logo />
          </div>
          <div className="Footer-Info five columns">
            @ {new Date().getFullYear()} Be Sweet Bakery. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
