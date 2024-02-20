import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (messageText) => {
    setMessages([...messages, { text: messageText, sender: 'user' }]);
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8" ref={chatbotRef}>
      <button
        className=" bg-primary text-text w-20 h-20 rounded-full shadow-lg hover:bg-accent"
        onClick={toggleChatbot}
      >
        Chat AI
      </button>
      {isOpen && (
        <div className="absolute bottom-0 right-0 bg-primary shadow-lg rounded-lg p-4 w-80">
          <div className="overflow-y-auto h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 mt-2 text-white text-right ' : 'bg-gray-200 text-black self-start'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
