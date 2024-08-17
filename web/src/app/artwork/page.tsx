"use client";
import NFTInfo from "./NFTInfo";
import NFTAttributes from "./NFTAttributes";
import ChatWindow from "./ChatWindow";

export default function NFTPage() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white p-6 gap-2">
      <div className="flex-1 mx-auto space-y-6">
        <NFTInfo />
        <NFTAttributes />
      </div>

      <div className="flex-1 justify-center items-center">
        <ChatWindow />
      </div>
    </div>
  );
}
