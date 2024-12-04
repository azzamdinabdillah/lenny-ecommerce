import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import SearchResult from "./pages/SearchResult";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
