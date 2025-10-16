import { Link } from "react-router-dom";

import { Button } from "./Button";

import logito from "../assets/logito.png";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <section className="Navbar-logo">
        <img src={logito} alt="techrent" className="Navbar-img"></img>
      </section>
      <section className="Navbar-links">
        <Link className="Navbar-links--link" to="/">
          INICIO
        </Link>
        <Link className="Navbar-links--link" to="/contacts">
          NOSOTROS
        </Link>
        <Button className="Button Navbar-button">
          <Link to="/packages">
            PLANES
          </Link>
        </Button>
      </section>
    </nav>
  );
};
