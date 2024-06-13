import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = `https://fakestoreapi.com/products/${id}`;
        const response = await axios.get(apiURL);
        const data = await response.data;
        setProduct(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Include categoryName as a dependency to re-run effect when it changes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleCart = () => {};

  return (
    <>
      {isLoading ? (
        <section className="product-details p-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center ">
                <img
                  src={product.image}
                  alt="product-image"
                  className="img-fluid bg-white p-lg-5 p-2 rounded-4"
                />
              </div>
              <div className="col-md-6 pt-5">
                <h2>{product.title}</h2>
                <p className="fs-1 fw-bold">${product.price}</p>
                <p className="lead">{product.description}</p>
                <p className="border d-inline-block  p-2">
                  <span className="fw-bold">Category :</span> {product.category}
                </p>
                <div className="product-action-btn mt-3">
                  <button type="button" className="btn">
                    <i className="ri-heart-fill"></i>
                    ADD TO WISHLIST
                  </button>
                  <button type="button" className="btn" onClick={handleCart}>
                    <i className="ri-shopping-cart-fill"></i>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ProductDetailsSkeleton />
      )}
    </>
  );
};

export default ProductDetails;
