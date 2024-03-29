import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Pages/Product'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <p><Link to='/'>Home</Link></p>
        </div>
        <div className="navbar-right">
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        </div>
    </div>
  )
}

export default Navbar