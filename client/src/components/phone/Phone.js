import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

import TextBubble from '../text-bubble/TextBubble';
import styles from './Phone.module.scss';

const Phone = props => {
  const [message, setMessage] = useState('');

  const sendButtonClicked = () => {
    props.sendMessageClicked(props.phoneIdentifier, message);
    setMessage('');
  };

  return (
    <div className={styles.Phone}>
      <div className={styles.Screen}>
        <div className={styles.MessageContainer}>
          {props.messages.map((phoneMessage, messageIndex) => (
            <div 
              className={phoneMessage.type === 'received' ? 
                styles.ReceivedTextBubbleContainer : 
                styles.SentTextBubbleContainer}
            >
              <TextBubble 
                key={messageIndex}
                className={styles.TextBubble}
              >
                {phoneMessage.message}
              </TextBubble> 
            </div>
          ))}
        </div>
        <div className={styles.InputContainer}>
          <input 
            type="text" 
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Enter a message..."
          />
          <button 
            className={styles.SendBtn}
            onClick={sendButtonClicked}
          >
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
