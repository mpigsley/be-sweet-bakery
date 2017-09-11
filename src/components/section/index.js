import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export const SectionType = {
  light: 'light',
  dark: 'dark',
  medium: 'medium',
};

export default function Section({ type, children }) {
  return (
    <section
      className={classNames('Section', {
        'Section-Light': type === SectionType.light,
        'Section-Dark': type === SectionType.dark,
        'Section-Medium': type === SectionType.medium,
      })}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  type: PropTypes.oneOf(Object.keys(SectionType)),
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  type: SectionType.light,
};
