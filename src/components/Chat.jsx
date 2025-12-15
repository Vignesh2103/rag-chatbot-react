import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import Message from "./Message";
import Input from "./Input";

import "../styles/Chat.scss";

// Connect to backend Socket.IO
const socket = io("http://localhost:3000");
const sessionId = uuid();

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on("bot_reply", msg => {
      setBotTyping(false);
      setMessages(m => [...m, { role: "bot", text: msg, time: new Date() }]);
    });

    return () => socket.off("bot_reply");
  }, []);

  useEffect(scrollToBottom, [messages, botTyping]);

  const send = text => {
    if (!text.trim()) return;
    const newMsg = { role: "user", text, time: new Date() };
    setMessages(m => [...m, newMsg]);
    setBotTyping(true);
    socket.emit("chat", { sessionId, message: text });
  };

  const reset = () => {
    socket.emit("reset", sessionId);
    setMessages([]);
    setBotTyping(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">📰 News Chatbot</div>

      <div className="chat-messages">
        {messages.map((m, i) => (
          <Message key={i} {...m} />
        ))}
        {botTyping && (
          <div className="msg bot typing">
            <div className="avatar bot-avatar">🤖</div>
            <div className="msg-text typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <Input onSend={send} onReset={reset} />
    </div>
  );
}
