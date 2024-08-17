import React from "react";

const ModelSelector = () => {
  return (
    <div className="mb-6">
      <label className="block text-gray-300 mb-2">
        Choose a Model <i className="fas fa-info-circle"></i>
      </label>
      <select className="w-full bg-gray-800 text-white p-3 rounded-md">
        <option>Stable Diffusion - Cost: 2 $cNFP</option>
        <option>Other Model - Cost: 3 $cNFP</option>
      </select>
    </div>
  );
};

export default ModelSelector;
