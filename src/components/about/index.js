import React, { Fragment } from 'react';
import classNames from 'classnames';

import BigImage from 'components/big-image';
import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';
import Anchor from 'components/anchor';
import Qna from 'components/qna';

import springFlowers from 'images/spring_flowers.jpg';
import tacos from 'images/tacos.jpg';
import teaParty from 'images/tea_party.jpg';
import brianna from 'images/brianna.jpg';

import styles from './styles.module.scss';

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
                className={styles.image}
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

      <Section type={SectionType.light}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <SubHeader>faqs</SubHeader>
          <div className={classNames('row', styles.qnas)}>
            <Qna
              question="Does Be Sweet make gluten free cookies?"
              answer={
                <Fragment>
                  Yes we do make gluten free sugar cookies! And we promise they
                  taste just as awesome. Please{' '}
                  <Anchor to="/contact">contact us</Anchor> for a quote.
                </Fragment>
              }
            />
            <Qna
              question="Does Be Sweet Ship?"
              answer="Absolutely! We can ship cookies anywhere in the US that you want to send some love and sparkles. When requesting an order to be shipped, the client assumes the risk of damaged or broken cookies, shipping delays, late packages, or other other shipping problems beyond the control of Be Sweet. All claims for damage will be sought by the client from the shipping company. There will be no refunds for shipped cookies. We ship with USPS unless otherwise specified."
            />
            <Qna
              question="How do I order?"
              answer={
                <Fragment>
                  Call, email, or{' '}
                  <Anchor to="/order">submit our website order form</Anchor> and
                  we will get back to you within 24 hours with a personalized
                  quote. Please include any inspiration, your theme, your date
                  needed and quantity of cookies. We can’t wait to make your
                  event sparkle!
                </Fragment>
              }
            />
            <Qna
              question="How do I reserve my date?"
              answer="Even though a cookie order and date has been discussed, it is not secured until full payment on invoice has been paid at least 7 days prior to your event date. Invoices will be sent via square to your email. Orders that are paid according to this timeline will be received. If an order is unpaid, we can not guarantee it will be ready on your date needed."
            />
            <Qna
              question="How soon should I order?"
              answer="Although we typically book up in advance, sometimes there is limited space for rush orders. So if you’re in a cookie emergency, please ask!"
            />
            <Qna
              question="Do you offer catering and bulk orders?"
              answer="Yes we do! We accommodate orders as small as a dozen, up to several thousands. Discounts may be offered on large bulk orders."
            />
            <Qna
              question="Do you accept corporate and wedding orders?"
              answer="We absolutely do and we would love the chance to WOW your clients, employees, and guests with cookies that sparkle. We can add your logo directly onto cookies for the tastiest business branding! We offer client gifting packages. Be Sweet has won The Knot Best of Weddings award."
            />
            <Qna
              question="What is your refund and cancellation policy?"
              answer="Because our schedule books up quickly and we spend a lot of time planning, preparing and designing your custom order, all paid orders are final and non refundable. In the rare case an emergency comes up on my part making me unable to fulfill your order, a full refund will be issued."
            />
            <Qna
              question="Do you offer delivery or pickup?"
              answer="All orders are picked up by appointment from our commercial kitchen, or delivery is available for a fee. "
            />
          </div>
        </div>
      </Section>

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
                please <Anchor to="/contact">contact us</Anchor> to find out
                more information! I would love to make your next event sparkle.
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
