import React from 'react';
import classNames from 'classnames';

import Section, { SectionType } from 'components/section';
import SubHeader from 'components/subheader';
import Anchor from 'components/anchor';
import Input from 'components/input';
import Label from 'components/label';
import Form from 'components/form';

import styles from './styles.module.scss';

export default function Order() {
  return (
    <div>
      <Section type={SectionType.light}>
        <div className="container">
          <h1>Order</h1>
          <SubHeader>our kitchen to yours</SubHeader>
          <div className={classNames('row', styles.faqs)}>
            <div className="three columns">&nbsp;</div>
            <div className="six columns">
              If you have any questions regarding your order, please be sure to
              look through the{' '}
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
                <Input
                  className="u-full-width"
                  type="text"
                  name="completion"
                  placeholder="Completion Date *"
                />
                <div className="row">
                  <div className="nine columns">
                    <Input
                      className="u-full-width"
                      id="item_description"
                      type="text"
                      name="item_description"
                      placeholder="Item Description *"
                    />
                  </div>
                  <div className="three columns">
                    <Input
                      className="u-full-width"
                      id="item_quantity"
                      type="text"
                      name="item_quantity"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <Label htmlFor="special_requests">Additional Comments</Label>
                <Input
                  type="textarea"
                  className="u-full-width"
                  name="special_requests"
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
