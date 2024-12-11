import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentMethod from "./pages/PaymentMethod";
import PaymentSuccess from "./pages/PaymentSuccess";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/products/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/checkout/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
