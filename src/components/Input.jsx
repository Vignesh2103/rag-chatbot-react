import { useState } from "react";

export default function Input({ onSend, onReset }) {
  const [text, setText] = useState("");

  return (
    <div className="input">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ask news..."
      />
      <button onClick={() => { onSend(text); setText(""); }}>
        Send
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
