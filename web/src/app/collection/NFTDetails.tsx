import React from "react";

const NFTDetails = ({
  title,
  owner,
  price,
}: {
  title: string;
  owner: string;
  price: string;
}) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">소유자: {owner}</p>
      <p className="text-white text-lg mt-2">{price} ETH</p>
    </div>
  );
};

export default NFTDetails;
