import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

// Context API Hitesh Choudhary

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("count", JSON.stringify(cartCount));
  }, [cart]);

  function addCart(id, title, price, category, description, image) {
    let newCart = [...cart];
    let item = {
      id: id,
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
      quantity: 1,
    };
            
    if (cart.length == 0 || cart == null) {
      // if array is empty
      // newCart.push({"id": id, "quantity": 1});
      newCart.push(item);
    } else if (cart.every((product) => product.id != id)) {
      // if array doesn't include product
      // newCart.push({"id": id, "quantity": 1})
      newCart.push(item);
    } else {
      // find the existing product and increase qty
      newCart.forEach((obj) => {
        if (obj.id == id) {
          obj.quantity++;
        }
      });
    }
    setCart(newCart);
    setCartCount(cartCount + 1);
  }

  // button only appears on ShoppingCart and FullCartPage (so there's already an entry in Cart)
  function subtractCart(id) {
    let temp = [...cart];

    // filter out products that have only 1 qty
    let newCart = temp.filter((obj) => {
      // return if product has 1+ qty
      if (obj.id == id) {
        if (obj.quantity != 1) {
          return obj;
        }
      } else if (obj.id != id) {
        return obj;
      }
    });

    newCart.forEach((obj) => {
      if (obj.id == id) {
        obj.quantity--;
      }
    });
    setCart(newCart);
    setCartCount(cartCount - 1);
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addCart, subtractCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
