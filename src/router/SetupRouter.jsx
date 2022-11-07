import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carts from "../pages/Carts";
import CheckoutPage from "../pages/CheckoutPage";
import ClothingPage from "../pages/ClothingPage";
import DetailOrderPage from "../pages/DetailOrderPage";
import DetailProduct from "../pages/DetailProduct";
import Favourites from "../pages/Favourites";
import Kids from "../pages/Kids";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import Men from "../pages/Men";
import NotFound from "../pages/NotFound";
import OrdersPage from "../pages/OrdersPage";
import Product from "../pages/Product";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import Search from "../pages/Search";
import ScrollToTop from "../lib/ScrollToTop";
import ShoesPage from "../pages/ShoesPage";
import Women from "../pages/Women";

const SetupRouter = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile">
            <Route path="" element={<ProfilePage />} />
            <Route path="order" element={<OrdersPage />} />
            <Route path="order/:id" element={<DetailOrderPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default SetupRouter;
