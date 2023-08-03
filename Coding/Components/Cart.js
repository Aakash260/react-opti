import React from 'react'
import { useSelector } from "react-redux"
 import FoodCart from './FoodCart'
const Cart = () => {
    const cartItem=useSelector(store=>store.cart.items)
     
    return (
        <div>
            <h1>Cart-{cartItem.length}</h1>
        {/* <FoodCart {...cartItem[0]} /> */}
        </div>
  )
}

export default Cart