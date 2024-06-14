import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryWiseProduct from "./pages/CategoryWiseProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";


const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/ecommWebapp/" element={<HomePage />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryWiseProduct />}
          />
          <Route path="/product/:id" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/wishlist" element={<Wishlist />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
