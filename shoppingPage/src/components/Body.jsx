import React, { useState } from "react";
import Header from "./Header";
import ApiCaller from "./ApiCalling";
import ProductCard from "./ProductCard";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar with Search */}
      <Header onSearch={setSearchTerm} />

      {/* Center Text */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-semibold">Store</h2>
        <h2 className="text-xl font-semibold"> Buy with MyShop Wallet</h2>
      </div>

      {/* API Caller */}
      <ApiCaller onData={(data) => setProducts(data)} />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="col-span-3 text-center text-xl text-gray-600">
            No products found
          </p>
        )}
      </div>

    </div>
  );
};

export default Body;
