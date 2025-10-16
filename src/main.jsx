import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Packages } from "./pages/Packages.jsx";
import { Contacts } from "./pages/Contacts.jsx";

import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Sin basename, ya que es un sitio de usuario */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
