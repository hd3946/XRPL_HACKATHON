import React from "react";
import ModelSelector from "./ModelSelector";
import ImagePromptUploader from "./ImagePromptUploader";
import TextPromptInput from "./TextPromptInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
            Image
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md mr-2">
            Video
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
            Music
          </button>
        </div>
        <ModelSelector />
        <ImagePromptUploader />
        <TextPromptInput />
      </div>
    </div>
  );
}
