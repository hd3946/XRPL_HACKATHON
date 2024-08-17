"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState<
    { message: string; sender: "user" | "other" }[]
  >([{ message: "Hello! How can I help you today?", sender: "other" }]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { message, sender: "user" }]);
    // Here you can add logic to send the message to a server or chatbot API.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { message: "This is an automated response.", sender: "other" },
      ]);
    }, 1000); // Simulated response time
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
