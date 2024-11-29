import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, updateCart, updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  const navigate = useNavigate();

  return (
    <div className="p-6 absolute top-[100px] left-[20%]">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold m-5">Cart</h2>

        <button onClick={() =>navigate("/") } className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Home
          </span>
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded gap-5 m-5"
            >
              <img className="h-12 m-3 " src={item.image} alt={item.title} />
              <p className="m-3 font-bold">{item.title}</p>
              <p>${item.price}</p>
              <div>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-300 px-2 py-1 rounded m-3"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-2 py-1 rounded m-3"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => updateCart(item.id, 0)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-4">Total: ${total.toFixed(2)}</h3>
          <h3 className="text-lg font-bold">
            Discounted Total: ${discountedTotal.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
