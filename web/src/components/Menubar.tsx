"use client";
import React, { useState } from "react";

const characterMenu = [
  { id: 1, name: "전사" },
  { id: 2, name: "마법사" },
  { id: 3, name: "궁수" },
  { id: 4, name: "도적" },
  { id: 5, name: "성기사" },
  { id: 6, name: "사냥꾼" },
  { id: 7, name: "흑마법사" },
];

const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveMenu(id);
    console.log(
      `${characterMenu.find((menu) => menu.id === id)?.name} 메뉴 선택됨`
    );
  };

  return (
    <nav className="w-full bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-start py-4 px-6 space-x-4">
        {characterMenu.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleClick(menu.id)}
            className={`py-2 px-4 rounded-md ${
              activeMenu === menu.id ? "bg-gray-500" : ""
            } hover:bg-gray-500 focus:outline-none`}
          >
            {menu.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default HeaderMenu;
