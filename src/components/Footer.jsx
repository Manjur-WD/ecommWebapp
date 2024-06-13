import React from "react";
import logo from "../assets/images/QuickMART logo.png";
import paymentImage1 from "../assets/images/payment-1.png.webp";
import paymentImage2 from "../assets/images/payment-2.png.webp";
import paymentImage3 from "../assets/images/payment-3.png.webp";
import paymentImage4 from "../assets/images/payment-4.png.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5">
        <section className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <img
                src={logo}
                alt="foot-logo"
                width={220}
                className="rounded rounded-2"
              />
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus vitae, a ad ipsam totam mollitia!
              </p>
              <div className="payment-gateway-logo d-flex gap-3">
                <img src={paymentImage1} alt="pament-1" width={40} />
                <img src={paymentImage2} alt="pament-1" width={40} />
                <img src={paymentImage3} alt="pament-1" width={40} />
                <img src={paymentImage4} alt="pament-1" width={40} />
              </div>
            </div>
            <div className="col-md-2 mb-4">
              <h5>
                QUICK <span className="">LINKS</span>
              </h5>
              <ul className="p-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/category/men's clothing">Mens</Link>
                </li>
                <li>
                  <Link to="/category/women's clothing">Womens</Link>
                </li>
                <li>
                  <Link to="/category/electronics">Electronics</Link>
                </li>
                <li>
                  <Link to="/category/jewelery">Jewellery</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h5>
                ACCOUNT <span>INFO</span>
              </h5>
              <ul className="p-0">
                <li>
                  <Link to="#">My Profile</Link>
                </li>
                <li>
                  <Link to="#">My Cart</Link>
                </li>
                <li>
                  <Link to="#">My Wishlist</Link>
                </li>
                <li>
                  <Link to="#">My orders</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>
                NEWS<span>LETTER</span>
              </h5>
              <form action="">
                <div className="input-group rounded rounded-pill overflow-hidden border border-dark bg-white mt-4">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control border-0 p-3 shadow-none"
                  />
                  <button
                    type="submit"
                    className="border-0 rounded rounded-pill m-1 px-3"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
              <div className="social-icons d-flex gap-5 mt-4">
                <i className="ri-facebook-fill"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-whatsapp-fill"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-pinterest-line"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="copyright text-dark">
          <p className="text-center m-0 py-2">
            Copyright © 2024 All rights reserved | This template is made by 
            <span> Manjur Alam Khandaker</span>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
