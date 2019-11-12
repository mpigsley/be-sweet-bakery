import React from 'react';
import classNames from 'classnames';

import Section, { SectionType } from 'components/section';
import SubHeader from 'components/subheader';
import Anchor from 'components/anchor';
import Input from 'components/input';
import Label from 'components/label';
import Form from 'components/form';

import styles from './styles.module.scss';

export default function Contact() {
  return (
    <div>
      <Section type={SectionType.light}>
        <div className="container">
          <h1>Contact Us</h1>
          <SubHeader>let&#39;s get in touch</SubHeader>
          <div className={classNames('row', styles.faqs)}>
            <div className="three columns">&nbsp;</div>
            <div className="six columns">
              Before submitting a question, please be sure to look through the{' '}
              <Anchor to="/about">FAQs located on the about page</Anchor>.
            </div>
            <div className="three columns">&nbsp;</div>
          </div>
          <div className="row">
            <div className="three columns">&nbsp;</div>
            <div className="six columns">
              <Form
                action="https://formspree.io/besweetomaha@gmail.com"
                method="POST"
              >
                <Input
                  className="u-full-width"
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                />
                <Input
                  className="u-full-width"
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                />
                <Label htmlFor="comments">Comments *</Label>
                <Input
                  type="textarea"
                  className="u-full-width"
                  name="comments"
                />
                <Input type="hidden" name="_next" value="/" />
                <Input
                  type="hidden"
                  name="_subject"
                  value="Be Sweet Bakery - Contact Us"
                />
                <Input className="button-primary" type="submit" value="Send" />
              </Form>
            </div>
            <div className="three columns">&nbsp;</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
