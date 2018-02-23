import React from 'react';

import BigImage from 'components/big-image';
import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';

import valentinesCookies from 'images/valentines_cookies.jpg';
import fallLeaves from 'images/fall_leaves.jpg';
import nebraska from 'images/nebraska_square.jpg';
import babyShower from 'images/baby_shower_square.jpg';

import './style.css';

export default function Home() {
  return (
    <div>
      <Section type={SectionType.light}>
        <div className="container">
          <h1>Featured Sweets</h1>
          <SubHeader>from the shop</SubHeader>
          <div className="row">
            <div className="one-third column">
              <img className="Home-Img" src={fallLeaves} alt="featured sweet" />
              <h5>Fall Leaves</h5>
            </div>
            <div className="one-third column">
              <img className="Home-Img" src={nebraska} alt="featured sweet" />
              <h5>Sport Teams</h5>
            </div>
            <div className="one-third column">
              <img className="Home-Img" src={babyShower} alt="featured sweet" />
              <h5>Baby Shower</h5>
            </div>
          </div>
        </div>
      </Section>

      <BigImage src={valentinesCookies} />

      <Section type={SectionType.dark}>
        <div className="container">
          <h1>Newsletter</h1>
          <SubHeader>get the scoop</SubHeader>
          <form
            action="http://besweetomaha.us12.list-manage.com/subscribe/post"
            className="alternative"
            method="POST"
          >
            <input type="hidden" name="u" value="cc995b7fe37454466cae9013d" />
            <input type="hidden" name="id" value="d8b1ec1ae1" />
            <input
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              value=""
              placeholder="Email Address"
            />
            <input type="submit" className="button-primary" value="Subscribe" />
          </form>
        </div>
      </Section>

      <Section type={SectionType.light}>
        <div className="container">
          <h1>Publications</h1>
          <SubHeader>in the news</SubHeader>
          <div className="row">
            <div className="one-third column">
              <a
                className="Home-Publication"
                href="https://www.discover-omaha.com/single-post/2017/11/30/Be-Sweet-Bakery"
              >
                <h4>Discover Omaha</h4>
                <p>Be Sweet Bakery</p>
              </a>
            </div>
            <div className="one-third column">
              <a
                className="Home-Publication"
                href="https://www.keenobby.com/2018/02/14/8815/"
              >
                <h4>Keenobi</h4>
                <p>That’s a Sweet Valentine’s Day!</p>
              </a>
            </div>
            <div className="one-third column">
              <a
                className="Home-Publication"
                href="https://www.npdodge.com/blog/2018/01/best-bakeries-omaha-satisfy-sweet-tooth/"
              >
                <h4>The Dodge Voice</h4>
                <p>The 10 Best Bakeries in Omaha to Satisfy Your Sweet Tooth</p>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
