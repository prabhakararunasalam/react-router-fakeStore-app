import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 m-8">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} alt={product.title} className="h-48 mx-auto" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              View Product
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
