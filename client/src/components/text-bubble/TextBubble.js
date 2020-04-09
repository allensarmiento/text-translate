import React from 'react';

import styles from './TextBubble.module.scss';

const TextBubble = props => {
  return (
    <div className={`${styles.TextBubble} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default TextBubble;
