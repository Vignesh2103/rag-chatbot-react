import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import Message from "./Message";
import Input from "./Input";

// Connect to backend Socket.IO
const socket = io("http://localhost:3000");  // works from host
const sessionId = uuid();

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("bot_reply", msg => {
      setMessages(m => [...m, { role: "bot", text: msg }]);
    });

    // Cleanup on unmount
    return () => socket.off("bot_reply");
  }, []);

  const send = text => {
    setMessages(m => [...m, { role: "user", text }]);
    socket.emit("chat", { sessionId, message: text });
  };

  const reset = () => {
    socket.emit("reset", sessionId);
    setMessages([]);
  };

  return (
    <div className="chat">
      <h2>📰 News Chatbot</h2>
      <div className="messages">
        {messages.map((m, i) => <Message key={i} {...m} />)}
      </div>
      <Input onSend={send} onReset={reset} />
    </div>
  );
}
