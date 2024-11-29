import React from "react";

const Cart = ({ cart, updateCart,updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="p-6 absolute top-[100px] left-[20%]">
      <h2 className="text-2xl font-bold m-5">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded gap-5 m-5">
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
          <h3 className="text-lg font-bold">Discounted Total: ${discountedTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
