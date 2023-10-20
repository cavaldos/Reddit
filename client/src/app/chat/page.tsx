
'use client'
import React, { useState, useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

interface Message {
  content: string;
  senderId: string;
  receiverId: string;
}

function MessageForm() {
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [content, setContent] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const newSocket = new WebSocket(`ws://reddit-pipk.onrender.com/`);
    setSocket(newSocket);

    newSocket.onmessage = (message) => {
      const decodedMessage: Message = JSON.parse(message.data.toString());
      console.log("Received message:", decodedMessage);
      setMessages((prevMessages) => [...prevMessages, decodedMessage]);
    };

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  const handleSenderIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderId(e.target.value);
  };

  const handleReceiverIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverId(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi tin nhắn
    if (socket && socket.readyState === WebSocket.OPEN) {
      const message: Message = {
        content: content,
        senderId: senderId,
        receiverId: receiverId,
      };
      socket.send(JSON.stringify(message));
      console.log("Sent message:", message);
    }
    // Clear form
    setSenderId("");
    setReceiverId("");
    setContent("");
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="senderId">Người gửi:</label>
          <input
            type="text"
            id="senderId"
            value={senderId}
            onChange={handleSenderIdChange}
          />
        </div>
        <div>
          <label htmlFor="receiverId">Người nhận:</label>
          <input
            type="text"
            id="receiverId"
            value={receiverId}
            onChange={handleReceiverIdChange}
          />
        </div>
        <div>
          <label htmlFor="content">Nội dung tin nhắn:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default MessageForm;
