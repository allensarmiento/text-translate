import React, { useState } from 'react';
import axios from 'axios';

import Phone from './components/phone/Phone';
import styles from './App.module.scss';

const App = () => {
  const [leftLanguage, setLeftLanguage] = useState('en');
  const [leftPhone, setLeftPhone] = useState([]);
  const [rightLanguage, setRightLanguage] = useState('en');
  const [rightPhone, setRightPhone] = useState([]);

  const sendMessageClicked = (phoneSender, messageToSend) => {
    if (messageToSend === undefined || messageToSend === '') { return }

    if (phoneSender === 'leftPhone') {
      // TODO: Split this up into a function
      axios.post('/translate', {
          text: messageToSend,
          language: rightLanguage
        })
        .then(response => response.data)
        .then(data => {
          const translatedMessage = data.translatedText;
          setLeftPhone(curMsgs => [...curMsgs, { type: 'sent', message: messageToSend }]);
          setRightPhone(curMsgs => [...curMsgs, { type: 'received', message: translatedMessage }]);
        })
        .catch(err => console.log(err));
    } else {
      // TODO: Split this up into a function
      axios.post('/translate', {
          text: messageToSend,
          language: leftLanguage
        })
        .then(response => response.data)
        .then(data => {
          const translatedMessage = data.translatedText;
          setRightPhone(curMsgs => [...curMsgs, { type: 'sent', message: messageToSend }]);
          setLeftPhone(curMsgs => [...curMsgs, { type: 'received', message: translatedMessage }]);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Text Translate using Google Translate API</h1>
      <div className={styles.PhoneGroup}>
        <div className={styles.PhoneContainer}>
          <div className={styles.LanguageContainer}>
            <h3>Language</h3>
            <input 
              type="text" 
              onChange={e => setLeftLanguage(e.target.value)}
              value={leftLanguage}
            />
          </div>
          <Phone 
            messages={leftPhone} 
            phoneIdentifier='leftPhone'
            sendMessageClicked={sendMessageClicked}
          />
        </div>
        <div className={styles.PhoneContainer}>
          <div className={styles.LanguageContainer}>
            <h3>Language</h3>
            <input 
              type="text" 
              onChange={e => setRightLanguage(e.target.value)}
              value={rightLanguage}
            />
          </div>
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
