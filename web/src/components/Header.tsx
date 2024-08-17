import Image from "next/image";

import { FaWallet, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* 왼쪽 끝: 로고 */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" className="mr-2" width={48} height={48} />
          <span className="text-xl font-bold">Web3 App</span>
        </div>

        {/* 중간: 검색 창 */}
        <div className="flex-1 mx-4 max-w-[480px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 오른쪽 끝: 아이콘 버튼들 */}
        <div className="flex space-x-4">
          <button className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-md">
            <FaWallet className="mr-2" />
            로그인
          </button>
          <button className="flex items-center bg-gray-800 text-white p-2 rounded-md">
            <FaUser />
          </button>
          <button className="flex items-center bg-gray-800 text-white p-2 rounded-md">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
