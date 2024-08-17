"use client";
import React, { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center p-3 bg-gray-700">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
