import React from 'react'
import { useSelector } from "react-redux"
 import FoodCart from './FoodCart'
  
const Cart = () => {
    const cartItem=useSelector(store=>store.cart.items)  
    return (
        <div>
    {cartItem.map((item)=>
     <FoodCart key={item.id} {...item} />   
    )}
        </div>
  )
}

export default Cart