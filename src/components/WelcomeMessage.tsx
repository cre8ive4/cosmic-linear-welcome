
import React, { useEffect, useState } from 'react';

interface WelcomeMessageProps {
  visible: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ visible }) => {
  const [message, setMessage] = useState('');
  const welcomeText = 'WELCOME TO EXPJETI GROUP';
  
  useEffect(() => {
    if (!visible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setMessage(welcomeText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [visible]);
  
  return (
    <div className={`welcome-text ${visible ? 'visible' : ''} text-center`}>
      <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-black">
        {message}
      </h1>
    </div>
  );
};

export default WelcomeMessage;
