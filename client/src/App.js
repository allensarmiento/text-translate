import React, { useState, useEffect } from 'react';

import Phone from './components/phone/Phone';

const App = () => {
  const [messages, setMessages] = useState({
    leftPhone: [
      'Message goes here...',
      'Message goes here...',
      'Message goes here...',
      'Message goes here...',
      'Message goes here...'
    ],
    rightPhone: []
  });

  return (
    <div>
      <Phone messages={messages.leftPhone} />
    </div>
  )
};

export default App;
