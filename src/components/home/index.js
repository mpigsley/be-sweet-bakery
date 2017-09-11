import React from 'react';

import BigImage from 'components/big-image';
import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';

import valentinesCookies from 'images/valentines_cookies.jpg';
import fallLeaves from 'images/fall_leaves.jpg';
import halloween from 'images/halloween.jpg';
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
              <img className="Home-Img" src={halloween} alt="featured sweet" />
              <h5>Halloween Assorted</h5>
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
    </div>
  );
}
