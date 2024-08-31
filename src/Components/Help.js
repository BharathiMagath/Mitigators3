import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../styles/Help.css';
import NavBar from './NavBar';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const prompt = input;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const botMessage = { sender: 'bot', text };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
  <div>
  <NavBar/>
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default ChatBot;
