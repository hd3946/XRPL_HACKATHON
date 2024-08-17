import React from "react";

interface ChatMessageProps {
  message: string;
  sender: "user" | "other";
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
