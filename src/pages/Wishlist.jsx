import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishListContext } from "../contexts/WishListContext";
import emptyWishlist from "../assets/images/empty-wishlist.jpg";

const Wishlist = () => {

  const { wishlistItems, removefromWishList } = useContext(WishListContext);
  
  return (
    <>
      {wishlistItems.length === 0 ? (
        <section className="emptyWishList d-flex flex-column align-items-center justify-content-center">
          <img src={emptyWishlist} alt="empty cart" className="w-25 my-3" />
          <p className="font-monoton fs-1 text-danger mb-4">
            Add Some to your wishlist !!!!!
          </p>
          <Link to="/ecommWebapp/" className="btn btn-dark rounded-4 mb-5">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="cart-wrapper">
          <div className="container">
            <div className="row bg-white shadow my-5">
              <div className="col-md-12 p-2">
                <div className="left-cart-section  p-3">
                  <div className="cart-head d-flex align-items-center justify-content-between border-bottom pb-3">
                    <h1 className=" fs-2  ">Wishlist</h1>
                    <p className="items fs-5 me-5 mb-0 fw-bold">
                      {wishlistItems.length} Items
                    </p>
                  </div>
                  <div className="cart-product pt-3">
                    <table className="w-100 ">
                      <thead className="w-100 ">
                        <tr>
                          <th>PRODUCT DETAILS</th>
                          <th>PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((wishlistItem) => (
                          <tr
                            className="border-bottom border-top"
                            key={wishlistItem.id}
                          >
                            <td className="py-3">
                              <div className="d-flex gap-2">
                                <img
                                  src={wishlistItem.image}
                                  alt="product-image"
                                  width={50}
                                  style={{ objectFit: "contain" }}
                                  loading="lazy"
                                />
                                <div
                                  className="cart-product-detail"
                                  style={{ width: "400px" }}
                                >
                                  <h5>{wishlistItem.title}</h5>
                                  <p className="fw-bold">
                                    {wishlistItem.category}
                                  </p>
                                  <figure
                                    className="text-danger remove-from-cart"
                                    onClick={() =>
                                      removefromWishList(wishlistItem.id)
                                    }
                                  >
                                    <i className="ri-delete-bin-7-fill me-1"></i>
                                    Remove
                                  </figure>
                                </div>
                              </div>
                            </td>

                            <td className="px-3">{wishlistItem.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Wishlist;
