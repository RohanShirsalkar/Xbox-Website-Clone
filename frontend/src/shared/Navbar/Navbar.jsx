import React from 'react'
import "./navbar.scss"
import { useNavigate, Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const setActive = (isActive, isPending, isTransitioning) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
        }
    }

    return (
        <div className='navbar-component d-flex align-center justify-between'>
            {/* Left Side */}
            <Link to="/">
                <img className='brand-logo' src="src\assets\Xbox-logo.png" width="75px" alt="" />
            </Link>

            {/* Right Side */}
            <nav>
                <ul>
                    <li><NavLink to="">Home</NavLink></li>
                    <li><NavLink to="all-products">All Products</NavLink></li>
                    <li><NavLink to="cart?tab=cart">Cart<span className='text-success'>(12)</span></NavLink></li>
                    <li><NavLink to="signin">Sign In</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
