import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/u/:username" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>,
);
