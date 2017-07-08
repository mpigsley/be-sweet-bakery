import React from 'react';

import './style.css';

import BigImage from 'components/big-image';
import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';
import Anchor from 'components/anchor';

import springFlowers from 'images/spring_flowers.jpg';
import tacos from 'images/tacos.jpg';
import teaParty from 'images/tea_party.jpg';

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
                Be Sweet Bakery takes custom orders for sweet treats and desserts.
                We truly want to make your sweet dreams come true! Be Sweet Bakery
                specializes in gourmet cakes, cupcakes, cheesecakes and so much more.
                We use only the freshest, highest quality ingredients. We also offer
                many sugar free and gluten free options! Treats can either be picked
                up at our business front and or delivered to any location in the
                Omaha area. We can do any flavor, or design—if you can dream it,
                I can make it!
              </p>
            </div>
            <div className="one column">&nbsp;</div>
          </div>
        </div>
      </Section>

      <BigImage src={springFlowers} />

      <Section type={SectionType.medium}>
        <div className="container">
          <h1>Meet the Founder</h1>
          <SubHeader>brianna parriott</SubHeader>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              <p>
                Baking sweet treats has been a lifelong passion. As a young girl,
                my parents purchased for me an Easy Bake Oven. Almost immediately,
                an obsession was born! From cakes to cookies, cupcakes to pies,
                I wanted to make it all! While other interests have come and gone,
                fifteen years later, baking is still my main passion in life.
                I take great joy in baking for family and friends, and was often
                encouraged to begin my own business. After getting my business
                degree at UNO, I finally decided to go for it! I started my
                internet-based gourmet sweet treats business in October 2015.
                I am now the full time baker/owner for Be Sweet Bakery.
              </p>
            </div>
            <div className="one column">&nbsp;</div>
          </div>
        </div>
      </Section>

      <BigImage src={tacos} />

      <Section type={SectionType.light}>
        <div className="container">
          <h1>Our Sweets are your Sweets</h1>
          <SubHeader>catering</SubHeader>
          <div className="row">
            <div className="one column">&nbsp;</div>
            <div className="ten columns">
              <p>
                Can’t get enough of our goodies? Good news, catering and
                bulk orders are available! Discounts may be given for large
                orders, <Anchor to="/shop">contact me</Anchor> to find out more
                information! I would love to help you host your next event.
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