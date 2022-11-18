import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/signup/Register";
import HomePage from "./components/pages/home/HomePage";
import Footer from "./components/organisms/footer/Footer";
import Products from "./components/pages/Products/Products";
import CartPage from "./components/pages/CartPage/CartPage";
import "../src/styles/normalize.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route exact path="/Register" element={<Register />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
