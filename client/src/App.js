import React, { useState, useEffect } from 'react';

import Phone from './components/phone/Phone';
import styles from './App.module.scss';

const App = () => {
  const [leftPhone, setLeftPhone] = useState([]);
  const [rightPhone, setRightPhone] = useState([]);

  const sendMessageClicked = (phoneSender, messageToSend) => {
    if (phoneSender === 'leftPhone') {
      setLeftPhone(curMsgs => [...curMsgs, { type: 'sent', message: messageToSend }]);
      setRightPhone(curMsgs => [...curMsgs, { type: 'received', message: messageToSend }]);
    } else {
      setRightPhone(curMsgs => [...curMsgs, { type: 'sent', message: messageToSend }]);
      setLeftPhone(curMsgs => [...curMsgs, { type: 'received', message: messageToSend }]);
    }
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Text Translate using Google Translate API</h1>
      <div className={styles.PhoneGroup}>
        <div className={styles.PhoneContainer}>
          <Phone 
            messages={leftPhone} 
            phoneIdentifier='leftPhone'
            sendMessageClicked={sendMessageClicked}
          />
        </div>
        <div className={styles.PhoneContainer}>
          <Phone 
            messages={rightPhone} 
            phoneIdentifier='rightPhone'
            sendMessageClicked={sendMessageClicked}
          />
        </div>
      </div>
    </div>
  )
};

export default App;
