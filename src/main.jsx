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
    {/* basename="/" funciona bien porque tu repo es techrentuio.github.io */}
    <BrowserRouter basename="/">
      <Routes>
        {/* App envuelve todas las rutas con el Navbar y el Outlet */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
