import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage  from './components/HomePage'
import Product from './components/Product'

export class App   {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path='/product' element={< Product/>}/>
        
      </Routes>
      </BrowserRouter>
     
      </div>
    )
  }
}

export default App
