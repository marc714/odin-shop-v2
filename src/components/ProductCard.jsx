import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

// Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.

export default function ProductCard({ products }) {
  // the 'products' is the fetched data pulled from the SwitchCategory or Initial loader on the Shopping Page.

  // const {cart, setCart} = useContext(CartContext);
  const { cart, setCart, addCart } = useContext(CartContext);

  return (
    <div className="shopping-page-container flex flex-wrap">
      {/* "I messed up initially. Nothing returned using syntax {} instead of () products.map(product => {}) " */}
      {products.map((product) => (
        <div
          className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
          key={product.id}
        >
          <img src={product.image} className="w-16 md:w-32 lg:w-48" />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              <Link to={`/shop/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
              {product.category}
            </p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                {product.price}
              </p>
              <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                {/* $25.00 */}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {/* 20% */}
              </p>
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              addCart(
                product.id,
                product.title,
                product.price,
                product.category,
                product.description,
                product.image
              )
            }
          >
            Quick Add
          </button>
        </div>
      ))}
    </div>
  );
}
