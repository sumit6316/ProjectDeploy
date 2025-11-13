import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">

      <img 
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      {/* Centered Title */}
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

      {/* Centered Price */}
      <p className="text-gray-700 text-md font-bold mb-4">$ {product.price}</p>

      {/* View Details Button */}
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        View Details
      </button>

    </div>
  );
};

export default ProductCard;
