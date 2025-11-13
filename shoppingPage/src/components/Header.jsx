import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ onSearch }) => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* LEFT – Logo + Cart */}
      <div className="flex items-center gap-3">
        <FaShoppingCart
          size={30}
          className="text-gray-800 hover:text-black transition"
        />
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          MyShop
        </h1>
      </div>

      {/* RIGHT – Professional Search Bar */}
      <div className="w-72">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="
            w-full 
            px-4 
            py-2 
            border border-gray-300 
            rounded-md 
            shadow-sm
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-400 
            focus:border-blue-400 
            transition
            placeholder-gray-500
          "
        />
      </div>

    </nav>
  );
};

export default Header;
