import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AddProducts } from './components/AddProducts'
import Homepage  from './components/Homepage'


function App()  {
    return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} /> 
        <Route path='/addproducts' element={<AddProducts/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App
