import React from 'react';
import Ionicon from 'react-ionicons';

import './style.css';

import Logo from 'components/logo';
import Horizontal, { HorizontalType } from 'components/horizontal';
import Anchor from 'components/anchor';

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
              <Anchor to="/about">Find out more</Anchor>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Contact</h5>
            <p className="Footer-Item">
              <Anchor href="mailto:besweetomaha@gmail.com" target="_top">besweetomaha@gmail.com</Anchor>
            </p>
            <p className="Footer-Item">
              <Anchor href="tel://1-402-658-8810">1-402-658-8810</Anchor>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Connect</h5>
            <p className="Footer-Item">
              <Anchor href="https://www.facebook.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-facebook" />
              </Anchor>
              <Anchor href="https://twitter.com/besweetomaha">
                <Ionicon className="Footer-Icon" fontSize="40px" icon="ion-social-twitter" />
              </Anchor>
            </p>
          </div>
        </div>
        <Horizontal type={HorizontalType.dark} />
        <div className="row">
          <div className="Footer-Info five columns">
            <Anchor to="/about">About</Anchor>
            <span className="Footer-Spacer">·</span>
            <Anchor to="/">Privacy Policy</Anchor>
            <span className="Footer-Spacer">·</span>
            <Anchor to="/shop">Contact</Anchor>
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
