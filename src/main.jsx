import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Packages } from "./pages/Packages.jsx";
import { Contacts } from "./pages/Contacts.jsx";

import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
