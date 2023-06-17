import React from "react";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Contact from "./Pages/Contact";
import Products from "./Pages/Products";

import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleProduct from "./Pages/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
