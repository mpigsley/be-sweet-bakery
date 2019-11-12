import React, { useState } from 'react';
import ChevronDown from 'react-feather/dist/icons/chevron-down';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

console.log(styles);

export default function Qna({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.container, {
        [styles['container--open']]: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.innerContainer}>
        <h4 className={styles.question}>Q: {question}</h4>
        {isOpen && <p className={styles.answer}>{answer}</p>}
      </div>
      <ChevronDown className={styles.icon} />
    </div>
  );
}

Qna.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.node.isRequired,
};
