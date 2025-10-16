import React from "react";
import ReactDOM from "react-dom/client";
// 👇 Importamos HashRouter en lugar de BrowserRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Packages } from "./pages/Packages.jsx";
import { Contacts } from "./pages/Contacts.jsx";

import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
