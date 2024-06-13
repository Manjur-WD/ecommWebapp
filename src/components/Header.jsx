import React, { useContext } from "react";
import logo from "../assets/images/QuickMART logo.png";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Header = () => {

  const {cartItems} = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
      <header className="bg-white sticky-top">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="brand-logo" width={150} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3  text-center">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link active-nav"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/category/men's clothing"
                  >
                    MENS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/category/women's clothing"
                  >
                    WOMENS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/category/electronics"
                  >
                    ELECTRONICS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/category/jewelery"
                  >
                    JEWELLERY
                  </NavLink>
                </li>
              </ul>
              <div className="right-head text-center d-flex gap-3">
                <i className="ri-user-3-line mx-3 fs-5"></i>
                <div className="wishlist-icon">
                  <i className="ri-heart-2-line fs-5"></i>
                  <span className="wishlist-count">0</span>
                </div>
                <div className="cart-icon">
                  <Link to="/cart" className="text-decoration-none text-dark">
                    <i className="ri-shopping-cart-2-line mx-3 fs-5"></i>
                    <span className="count-cart">{cartItems.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
