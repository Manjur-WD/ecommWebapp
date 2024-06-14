import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import emptyCart from "../assets/images/empty-cart-2130356-1800917.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);
  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  window.scrollTo(0, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <section className="emptyCart d-flex flex-column align-items-center justify-content-center">
          <img src={emptyCart} alt="empty cart" className="img-fluid" />
          <p className="font-monoton fs-1 text-danger mb-4">Your Cart is empty !!!!</p>
          <Link  to="/ecommWebapp/" className="btn btn-dark rounded-4 mb-5">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="cart-wrapper">
          <div className="container">
            <div className="row bg-white shadow my-5">
              <div className="col-md-9 p-2">
                <div className="left-cart-section  p-3">
                  <div className="cart-head d-flex align-items-center justify-content-between border-bottom pb-3">
                    <h1 className=" fs-2  ">Shopping Cart</h1>
                    <p className="items fs-5 me-5 mb-0 fw-bold">
                      {cartItems.length} Items
                    </p>
                  </div>
                  <div className="cart-product pt-3">
                    <table className="w-100 ">
                      <thead className="w-100 ">
                        <tr>
                          <th>PRODUCT DETAILS</th>
                          <th>QUANTITY</th>
                          <th>PRICE</th>
                          <th>TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem) => (
                          <tr
                            className="border-bottom border-top"
                            key={cartItem.id}
                          >
                            <td className="py-3">
                              <div className="d-flex gap-2">
                                <img
                                  src={cartItem.image}
                                  alt="product-image"
                                  width={50}
                                  style={{ objectFit: "contain" }}
                                  loading="lazy"
                                />
                                <div
                                  className="cart-product-detail"
                                  style={{ width: "400px" }}
                                >
                                  <h5>{cartItem.title}</h5>
                                  <p className="fw-bold">{cartItem.category}</p>
                                  <figure
                                    className="text-danger remove-from-cart"
                                    onClick={() =>
                                      removeItemFromCart(cartItem.id)
                                    }
                                  >
                                    <i className="ri-delete-bin-7-fill"></i>{" "}
                                    Remove
                                  </figure>
                                </div>
                              </div>
                            </td>
                            <td className="px-5">
                              <span className="up me-2">+</span>
                              <span className="px-3 py-1 border">1</span>
                              <span className="down ms-2">-</span>
                            </td>
                            <td className="px-3">{cartItem.price}</td>
                            <td className="px-3">{cartItem.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-2 ">
                <div className="right-cart-section p-4 mt-1">
                  <h3 className="fw-bold border-bottom pb-4 fs-5">
                    Order Summery
                  </h3>
                  <div className="order-summery-head d-flex justify-content-between fw-bold">
                    <p>ITEMS {cartItems.length}</p>
                    <p>${calculateTotal(cartItems)}</p>
                  </div>

                  <div className="promo-code mb-3">
                    <label htmlFor="" className="fw-bold mb-1">
                      PROMO CODE
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Code"
                      className="form-control"
                    />
                    <button type="button" className="btn">
                      APPLY
                    </button>
                  </div>
                  <hr />
                  <div className="total-cost d-flex justify-content-between fw-bold">
                    <p>TOTAL COST</p>
                    <p>${calculateTotal(cartItems)}</p>
                  </div>
                  <button className="form-control checkout">CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
