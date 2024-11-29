import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ addToCart,updateCart, cart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart , setIsInCart] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
 
  useEffect(() => {
    // Check if the product is already in the cart
    if (product) {
      const productInCart = cart.find((item) => item.id === parseInt(id));
      setIsInCart(!!productInCart);
    }
  }, [id, cart, product]);

const handleButtonClick = () => {
  if (isInCart) {
    updateCart(product.id);
  } else {
    addToCart(product);
  }
  setIsInCart(!isInCart); // Toggle the state
};


  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10 flex flex-col justify-center items-center w-[70%] absolute top-[120px] left-[20%]">
      <img src={product.image} alt={product.title} className="h-64 mx-auto" />
      <h2 className="text-xl font-bold ">{product.title}</h2>
      <p className="text-lg m-2">{product.description}</p>
      <p className="text-lg font-semibold m-2">${product.price}</p>
      <button
        onClick={() => {
          handleButtonClick()
        }}
        className={`mt-4 text-white px-4 py-2 rounded ${
          isInCart ? "bg-red-500" : "bg-green-500"
        } `}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
      <button className="mt-4 text-white px-4 py-2 rounded bg-blue-500" onClick={()=> navigate("/cart")}>view cart</button>
    </div>
  );
};

export default ProductDetails;
