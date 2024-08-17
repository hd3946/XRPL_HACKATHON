import React from "react";

const PurchaseOptions = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg flex space-x-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        지금 구매하기
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
        제안하기
      </button>
    </div>
  );
};

export default PurchaseOptions;
