import React from 'react'
import '../css/Homepage.css'
import { Navbar } from './Navbar'
import { Product } from './Product'


function HomePage () {
    
    return (
        <div className='wrapper'>
            <Navbar/> 
            <Product/>
        </div>
    )
}

export default HomePage;