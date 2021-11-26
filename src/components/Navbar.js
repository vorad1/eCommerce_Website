import React from 'react'
import { Link } from 'react-router-dom';
import  logo1 from '../images/logo1.png'
export const  Navbar =  () => {
    return (
        <div className = 'navbox'>
           <div className = 'leftSide'>
               <img src={logo1} alt=""/>
           </div>
           <div className='rightSide'>
               <Link to='/signup' className='navlinks'>Sign Up</Link>
               <Link to='/login' className='navlinks'>Login</Link>
           </div>
        </div>
    )
}

