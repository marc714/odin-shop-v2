import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function ShoppingCart() {
  const { cart, addCart, subtractCart } = useContext(CartContext);
  let total = 0;

  cart.forEach((product) => {
    let subtotal = product.price * product.quantity;
    total = total + subtotal;
  });

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Your items
      </h1>
      {cart.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <span className="">name: {product.title}</span>
          <span className="">quantity: {product.quantity}</span>
          <span className="">price: {product.price}</span>
          <span className="">subtotal: {product.price * product.quantity}</span>
          <button
            onClick={() => addCart(product.id)}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add
          </button>
          <button
            onClick={() => subtractCart(product.id)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete
          </button>
          <img
            src={product.image}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          />
        </div>
      ))}
      <div>Grand Total: {total}</div>
      <button
        onClick={() => console.log("does nothing")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Check Out
      </button>
    </>
  );
}

export default ShoppingCart;
