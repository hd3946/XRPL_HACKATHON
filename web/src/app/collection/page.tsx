import React from "react";
import NFTImage from "./NFTImage";
import NFTDetails from "./NFTDetails";
import PurchaseOptions from "./PurchaseOptions";
import TransactionHistory from "./TransactionHistory";
import Accordion from "./Accordion";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <NFTImage src="/path-to-your-image.jpg" />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <NFTDetails
            title="Mochi Circle #2935"
            owner="shaunruma"
            price="0.0053"
          />
          <PurchaseOptions />
          <TransactionHistory />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
