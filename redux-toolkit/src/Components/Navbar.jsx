import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Pages/Product'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import {  useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(state=> state.cart) || [0]
  // const cartItems = useSelector(state => state.cart) || []; // Provide a default value (empty array) if cartItems is null or undefined
  const cartItemsLength = cartItems.length; // Get the length of cartItems
  return (
    <div className="navbar">
        <div className="navbar-left">
            <p><Link to='/'>Home</Link></p>
        </div>
        <div className="navbar-right">
            <Link to='/cart'><img src={cart_icon} alt="" /> {cartItemsLength} </Link>
            
        </div>
    </div>
  )
}

export default Navbar