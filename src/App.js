import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddProducts } from "./components/AddProducts";
import Homepage from "./components/Homepage";
import { ProductsContextProvider } from "./global/ProductsContext";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/addproducts" element={<AddProducts />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
