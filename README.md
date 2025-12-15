# RAG News Chatbot – Frontend

This is the **frontend** of the RAG-powered News Chatbot built as part of the **Voosh Full Stack Developer assignment**.

The application provides a real-time chat interface where users can ask questions about news articles and receive AI-generated responses using a Retrieval-Augmented Generation (RAG) pipeline.

---

## Tech Stack

- **React (Vite)**
- **SCSS** for styling
- **Socket.IO Client** for real-time chat
- **UUID** for session management

---

## Features

- 💬 Real-time chat using WebSockets
- 🆕 New session created for every user
- 📜 Displays full chat history per session
- 🔄 Reset session button
- ⚡ Instant bot replies streamed from backend
- 🎨 Simple and clean UI

---

## Project Structure

src/
├─ components/
│ ├─ Chat.jsx
│ ├─ Message.jsx
│ └─ Input.jsx
├─ styles/
│ └─ chat.scss
├─ App.jsx
└─ main.jsx

