import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatbotRef = useRef(null);
  const chatContainerRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    const messageText = inputText.trim();
    if (messageText !== '') {
      const newUserMessage = { text: messageText, sender: 'user' };
      setMessages([...messages, newUserMessage]); // Add user's message to the state
  
      axios.get(`http://65.0.168.34/bookmyUserQuery/${messageText}`)
        .then(response => {
          console.log(response.data.generatedResponse);
          const aiResponse = response.data.generatedResponse;
          const newBotMessage = { text: aiResponse, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, newBotMessage]); // Add AI's response to the state
        })
        .catch(error => {
          console.error('Error sending request:', error);
        });
        
      setInputText('');
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
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

  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Trigger scroll effect whenever messages update

  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8 z-50" ref={chatbotRef}>
      <button
        className=" bg-primary text-text w-20 h-20 rounded-full shadow-lg hover:bg-accent"
        onClick={toggleChatbot}
      >
        Chat AI
      </button>
      {isOpen && (
        <div className="absolute bottom-0 right-0 bg-back dark:bg-white shadow-lg rounded-lg p-4 w-96">
          <div className="overflow-y-auto h-[600px]" ref={chatContainerRef}>
                {messages.map((message, index) => (

                    <div className={message.sender === 'user' ? ' text-end':'text-start'}>
                        <div
                        key={index}
                        className={`text-sm p-2 rounded-lg ${
                          message.sender === 'user' ? 'bg-blue-500 mt-3 text-white self-start inline-block ' : 'bg-gray-200 mt-3 text-black self-start '
                        }`}
                            >
                        {message.text}
                        </div>
                    </div>
                ))}
          </div>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
