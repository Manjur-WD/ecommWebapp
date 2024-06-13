import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Pcard = (props) => {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(props.rate)) {
      starArray.push(
        <i key={`star_${i}`} className="ri-star-s-fill text-warning"></i>
      );
    } else {
      starArray.push(
        <i
          key={`half_star_${i}`}
          className="ri-star-half-s-line text-warning"
        ></i>
      );
    }
  }

  const { addItemToCart } = useContext(CartContext);

  const handleClick = () => {
    addItemToCart(props);
  };

  return (
    <>
      <div className="product-card border px-md-5 px-3 bg-white shadow rounded-4 mb-3">
        <div className="pcard-image py-4 d-flex justify-content-center">
          <img
            src={props.image}
            alt="product-image"
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <p className="price-title text-center">{props.title}</p>
        <div className="title-price-ratings d-flex align-items-center justify-content-between gap-3">
          <div className="price">
            <h4>${props.price}</h4>
          </div>
          <div className="price-rating">
            <figure>{starArray}</figure>
          </div>
        </div>
        <p className="text-center">{props.count} left</p>
        <div className="action-btn-container">
          <div className="action-on-product d-flex justify-content-around px-md-5 mx-md-4 px-2">
            <div className="wishlist-btn">
              <i
                className="ri-heart-fill"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to wishlist"
              ></i>
            </div>
            <div className="add-to-cart-btn" onClick={handleClick}>
              <i
                className="ri-shopping-cart-fill"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to cart"
              ></i>
            </div>
            <div className="view-product-btn">
              <Link to={`/product/${props.pid}`}>
                <i
                  className="ri-eye-fill"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="View product"
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pcard;
