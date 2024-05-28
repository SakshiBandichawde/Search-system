import React from 'react';
import './Sidebar.css';
import { FaFilter } from "react-icons/fa";
import Category from './Category/Category';
import Price from './Price/Price';
import Colours from './Colours/Colours';


function Sidebar({handleChange}){
    return(
        <>
        <section className='sidebar'>
            <div className='logo-container'>
                <FaFilter className='logo-icon'/>
            </div>

            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colours handleChange={handleChange}/>
        </section>
        </>
    )
}

export default Sidebar;