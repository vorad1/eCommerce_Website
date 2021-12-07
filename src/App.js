import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import NotFound from './Components/NotFound'
import AddProducts from './Components/AddProducts'
import Cart from './Components/Cart'

export const App = () => {
  return (
    <div>
      {/* for routing */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/add-products' element={<AddProducts />} />
          <Route path="/cart" component={Cart} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App