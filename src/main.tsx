import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route, useFetcher } from "react-router";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentMethod from "./pages/PaymentMethod";
import PaymentSuccess from "./pages/PaymentSuccess";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
    });

    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-result" element={<SearchResult />} />
      <Route path="/products/product-detail" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />
      <Route path="/cart/checkout/payment-method" element={<PaymentMethod />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/detail" element={<BlogDetail />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
