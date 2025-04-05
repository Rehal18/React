import {useState} from 'react'

export const Cart = () => {
    const[cartCount,setCartCount]=useState(0)
    const handleClick=()=>setCartCount(cartCount+1)
  return (
    <>
    <h2>Number of Items in Cart {cartCount}</h2>
    <button onClick={handleClick}>Add to Cart</button>
    </>
  )
}
