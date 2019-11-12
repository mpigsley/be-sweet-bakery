import React from 'react';
import Instagram from 'react-feather/dist/icons/instagram';
import Facebook from 'react-feather/dist/icons/facebook';
import Twitter from 'react-feather/dist/icons/twitter';

import Logo from 'components/logo';
import Horizontal, { HorizontalType } from 'components/horizontal';
import Anchor from 'components/anchor';

import './style.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <Horizontal type={HorizontalType.dark} />
        <div className="row">
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">We Cater</h5>
            <p className="Footer-Item">
              Available for events and bulk ordering
            </p>
            <p className="Footer-Item">
              <Anchor to="/about">Find out more</Anchor>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Contact</h5>
            <p className="Footer-Item">
              <Anchor href="mailto:besweetomaha@gmail.com" target="_top">
                besweetomaha@gmail.com
              </Anchor>
            </p>
            <p className="Footer-Item">
              <Anchor href="tel://1-402-658-8810">1-402-658-8810</Anchor>
            </p>
          </div>
          <div className="one-third column Footer-Column">
            <h5 className="Footer-ItemTitle">Connect</h5>
            <p className="Footer-Item">
              <Anchor href="https://www.facebook.com/besweetomaha">
                <Facebook className="Footer-Icon" size={40} />
              </Anchor>
              <Anchor href="https://twitter.com/besweetomaha">
                <Twitter className="Footer-Icon" size={40} />
              </Anchor>
              <Anchor href="https://www.instagram.com/besweetomaha/">
                <Instagram className="Footer-Icon" size={40} />
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
            <Anchor to="/contact">Contact</Anchor>
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
