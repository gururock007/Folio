import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthProvider from "./contexts/AuthContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
