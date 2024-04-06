import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

// on click of the icon - show full Shopping Cart Modal (or slide out)

function SmallCart() {

  const {cart, setCart, addCart, subtractCart, cartCount} = useContext(CartContext)

  return (
    <div className='smallcart-container'>
      <Link to='cart'>
        <div>Cart {cartCount}</div>
        {/* <div>{cartCount}</div> */}
      </Link>
      
    </div>
  )
}

export default SmallCart