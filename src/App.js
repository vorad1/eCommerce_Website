import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage  from './components/Homepage'
import Product from './components/Product'

function App()  {
    return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} /> 
      </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App
