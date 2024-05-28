import React from 'react';
import './Nav.css';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




const Nav=({handleInputChange,query})=>{
    return(
        <nav>
            <div className='nav-container'>
               <input type='text' placeholder='Enter your search shoes' className='search-input'
               onChange={handleInputChange}
               value={query}
               />
            </div>

            <div className='profile-container'>
                <a href='#'>
                <FaHeart className='nav-icons'/>
                </a>
                <a href='#'>
                <FaShoppingCart className='nav-icons'/>
                </a>
                <a href='#'>
                <FaUser className='nav-icons'/>
                </a>

            </div>
        </nav>
    )

}

export default Nav;