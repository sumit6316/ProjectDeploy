import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCaller = ({ onData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        onData(res.data);   // send data to parent
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [onData]);

  return loading ? (
    <p className="text-center text-lg py-4">Loading products...</p>
  ) : null;
};

export default ApiCaller;
