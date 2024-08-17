import Image from "next/image";
import React from "react";

const NFTImage = ({ src }: { src: string }) => {
  return (
    <div className="p-4">
      <Image
        src={src}
        alt="NFT"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg shadow-lg object-cover"
        quality={100}
      />
    </div>
  );
};

export default NFTImage;
