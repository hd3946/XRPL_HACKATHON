import React from "react";
import Image from "next/image";
import { FaFire, FaHeart, FaShareAlt, FaUserCircle } from "react-icons/fa";

const NFTInfo = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">HIM: Genesis#16</h1>
      <div className="flex items-center mb-6">
        <FaUserCircle className="text-gray-400" size={32} />
        <div className="ml-4">
          <p className="text-gray-400">0x51b5...8F32</p>
          <p className="text-sm text-gray-600">7 months ago</p>
        </div>
        <button className="ml-4 px-4 py-2 bg-blue-600 rounded-full">
          Follow
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <Image
          src=""
          alt="NFT Image"
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-pink-500 flex items-center">
            <FaFire className="mr-2" />
            5977
          </span>
          <span className="text-gray-400 flex items-center">
            <FaHeart className="mr-2" />
            495
          </span>
        </div>
        <button className="text-gray-400 flex items-center">
          <FaShareAlt className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default NFTInfo;
