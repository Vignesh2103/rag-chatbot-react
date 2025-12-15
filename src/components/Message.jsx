import "../styles/Chat.scss";

export default function Message({ role, text, time }) {
  const formattedTime = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`msg ${role}`}>
      <div className="msg-text">{text}</div>
      <div className="msg-time">{formattedTime}</div>
    </div>
  );
}
