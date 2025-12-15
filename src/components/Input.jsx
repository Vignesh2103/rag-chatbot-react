import { useState } from "react";
import "../styles/Chat.scss";
export default function Input({ onSend, onReset }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="chat-input">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ask news..."
        onKeyDown={e => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={onReset} className="reset-btn">Reset</button>
    </div>
  );
}
