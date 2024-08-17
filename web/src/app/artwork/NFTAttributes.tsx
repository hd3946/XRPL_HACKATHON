import React from "react";

const NFTAttributes = () => {
  const attributes = [
    { trait: "BACKGROUND", value: "Red" },
    { trait: "BOY", value: "Lance" },
    { trait: "CLOTHING", value: "Blue Jacket and Black Sweater" },
    { trait: "EYES", value: "Normal" },
    { trait: "MOUTH", value: "Serious" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        {attributes.map((attr, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg text-center">
            <p className="text-gray-500">{attr.trait}</p>
            <p className="text-white font-bold">{attr.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTAttributes;
