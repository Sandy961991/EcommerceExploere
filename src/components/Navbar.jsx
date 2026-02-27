import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Shop</Link>

        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>

          <NavLink className="nav-link" to="/cart">
            Cart ({totalItems})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;