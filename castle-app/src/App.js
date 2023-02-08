import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Error404 from "./components/errors/Error404";
import HomePage from "./components/home/HomePage";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import CartPage from "./components/cart/CartPage";
import OrderPage from "./components/order/orderPage.jsx";
import OrderPageConfirmation from "./components/order/orderPageConfirmation";

function App() {
  return (
    //  <Router basename="/castle/">
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/commande" element={<OrderPage />} />
        <Route path="/commande/:id" element={<OrderPageConfirmation />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
