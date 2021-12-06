import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Home  from './Components/Home'
import  SignUp  from './Components/SignUp'
import  Login  from './Components/Login'
import  NotFound  from './Components/NotFound'
import AddProducts  from './Components/AddProducts'

function App() {
  return (
    <div>   
        {/* for routing */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/add-products' element={<AddProducts/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
