import React from 'react';

import TextBubble from '../text-bubble/TextBubble';
import styles from './Phone.module.scss';

const Phone = props => {
  return (
    <div className={styles.Phone}>
      <div className={styles.Screen}>
        <div className={styles.MessageContainer}>
          {props.messages.map((phoneMessage, messageIndex) => (
            <TextBubble key={messageIndex}>
              {phoneMessage}
            </TextBubble> 
          ))}
        </div>
        <div className={styles.InputContainer}>
          <input type="text" placeholder="Enter a message..."/>
        </div>
      </div>
    </div>
  );
};

export default Phone;
