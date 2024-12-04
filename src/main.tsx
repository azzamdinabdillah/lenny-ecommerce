import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/products/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
