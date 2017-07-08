import React from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';

import './style.css';

import Logo from 'components/logo';
import Horizontal, { HorizontalType } from 'components/horizontal';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <Horizontal type={HorizontalType.dark} />
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
              <a className="Footer-Link" Horizontalef="mailto:besweetomaha@gmail.com" target="_top">besweetomaha@gmail.com</a>
            </p>
            <p className="Footer-Item">
              <a className="Footer-Link" Horizontalef="tel://1-402-658-8810">1-402-658-8810</a>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Connect</h5>
            <p className="Footer-Item">
              <a className="Footer-Link" Horizontalef="https://www.facebook.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-facebook" />
              </a>
              <a className="Footer-Link" Horizontalef="https://twitter.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-twitter" />
              </a>
            </p>
          </div>
        </div>
        <Horizontal type={HorizontalType.dark} />
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
