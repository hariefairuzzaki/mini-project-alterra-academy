import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import client from "./configs/apolloClient";
import Carts from "./pages/Carts";
import ClothingPage from "./pages/ClothingPage";
import DetailProduct from "./pages/DetailProduct";
import Favourites from "./pages/Favourites";
import Kids from "./pages/Kids";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Men from "./pages/Men";
import Product from "./pages/Product";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import Search from "./pages/Search";
import ShoesPage from "./pages/ShoesPage";
import store from "./store";
import Women from "./pages/Women";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/detail/:id" element={<DetailProduct />} />
              <Route path="/clothing" element={<ClothingPage />} />
              <Route path="/shoes" element={<ShoesPage />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/cart" element={<Carts />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favourite" element={<Favourites />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile">
                <Route path="" element={<ProfilePage />} />
                <Route path="order" element={<OrdersPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
