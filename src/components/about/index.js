import React from 'react';

import BigImage from 'components/big-image';
import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';
import Anchor from 'components/anchor';

import springFlowers from 'images/spring_flowers.jpg';
import tacos from 'images/tacos.jpg';
import teaParty from 'images/tea_party.jpg';
import brianna from 'images/brianna.jpg';

import './style.css';

export default function About() {
  return (
    <div>
      <Section type={SectionType.dark}>
        <div className="container">
          <h1>About</h1>
          <SubHeader>our mission</SubHeader>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              <p>
                Be Sweet Bakery accepts custom orders for design cookies to make
                your event sparkle! We truly want to make your sweet dreams come
                true! We use only the freshest, highest quality ingredients and
                can accommodate dietary restrictions. We can do any flavor, or
                design - if you can dream it, we can make it! As always, Be
                Sweet Bakery ships nationwide, so we can send cookies anywhere
                you want to send some love!
              </p>
            </div>
            <div className="one column">&nbsp;</div>
          </div>
        </div>
      </Section>

      <BigImage src={springFlowers} />

      <Section type={SectionType.light}>
        <div className="container">
          <h1>Meet the Founder</h1>
          <SubHeader>brianna parriott</SubHeader>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="four columns">
              <img
                className="About-Image"
                src={brianna}
                alt="Brianna Pigsley"
              />
            </div>
            <div className="six columns">
              <p>
                Baking sweet treats has been a lifelong passion. As a young
                girl, my parents purchased an easy bake oven for me and almost
                immediately, my passion was born! From cakes to cookies,
                cupcakes to pies, I wanted to make it all! I always took great
                joy in baking for friends and family and was encouraged to open
                my own business. While achieving my business degree from
                University of Nebraska - Omaha, I finally decided to make my
                dreams a reality in October 2015! I am now the full time
                owner/designer for Be Sweet Bakery.
              </p>
            </div>
            <div className="one column">&nbsp;</div>
          </div>
        </div>
      </Section>

      <BigImage src={tacos} />

      <Section type={SectionType.medium}>
        <div className="container">
          <h1>Our Sweets are your Sweets</h1>
          <SubHeader>catering</SubHeader>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              <p>
                Can’t get enough of our sweets? Good news, catering and bulk
                orders are available! Discounts may be given for large orders,
                please <Anchor to="/shop">contact me</Anchor> to find out more
                information! I would love to make your next event sparkle.
              </p>
            </div>
            <div className="one column">&nbsp;</div>
          </div>
        </div>
      </Section>

      <BigImage src={teaParty} />
    </div>
  );
}
