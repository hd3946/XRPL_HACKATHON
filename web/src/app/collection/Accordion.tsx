"use client";
import React, { useState } from "react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 focus:outline-none"
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">{title}</span>
          <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && <div className="p-4 bg-gray-900">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

const accordionData = [
  {
    title: "설명",
    content: (
      <>
        <p className="text-gray-300">
          제작자 <span className="font-bold text-white">A9FDCE</span>
        </p>
        <p className="text-gray-400">
          A collection of 3500 Mochi people from the Mochi Circle universe.
        </p>
      </>
    ),
  },
  {
    title: "특성",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-white">ACCESSORIES</p>
          <p className="text-gray-400">None 27%</p>
          <p className="text-white">하한가: 0.0053 ETH</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-white">BACKGROUND</p>
          <p className="text-gray-400">Pink 17%</p>
          <p className="text-white">하한가: 0.0053 ETH</p>
        </div>
        {/* 추가 특성 섹션 */}
      </div>
    ),
  },
  {
    title: "Mochi Circle 정보",
    content: (
      <>
        <p className="text-gray-400">
          Mochi Circle is a utility-based NFT collection that focuses on
          bringing people together...
        </p>
        <div className="flex space-x-2 mt-4">
          <button className="bg-gray-800 p-2 rounded-lg">Twitter</button>
          <button className="bg-gray-800 p-2 rounded-lg">Discord</button>
          <button className="bg-gray-800 p-2 rounded-lg">Website</button>
        </div>
      </>
    ),
  },
  {
    title: "세부 정보",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400">계약 주소</p>
          <p className="text-white">0xf120...9068</p>
        </div>
        <div>
          <p className="text-gray-400">토큰 ID</p>
          <p className="text-white">2935</p>
        </div>
        {/* 추가 세부 정보 */}
      </div>
    ),
  },
];
