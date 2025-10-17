import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react"; // 🛒 Importa el ícono del carrito
import logito from "../assets/logito.png";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      {/* Logo */}
      <section className="Navbar-logo">
        <img src={logito} alt="techrent" className="Navbar-img" />
      </section>

      {/* Links */}
      <section className="Navbar-links">
        <Link className="Navbar-links--link" to="/">
          INICIO
        </Link>
        <Link className="Navbar-links--link" to="/contacts">
          NOSOTROS
        </Link>

        {/* Botón de Planes */}
        <Button className="Button Navbar-button">
          <Link to="/packages">PLANES</Link>
        </Button>

        {/* 🛒 Carrito de compras */}
        <Link to="/cart" className="Navbar-cart" aria-label="Carrito de compras">
          <ShoppingCart size={26} />
        </Link>
      </section>
    </nav>
  );
};
