import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Pcard from "../components/Pcard";
import Skeleton from "react-loading-skeleton";
import SkeletonCard from "../components/SkeletonCard";

const CategoryWiseProduct = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = `https://fakestoreapi.com/products/category/${categoryName}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryName]); // Include categoryName as a dependency to re-run effect when it changes

  let categoryType = "";

  if (categoryName === "men's clothing") {
    categoryType = "MENS";
  } else if (categoryName === "women's clothing") {
    categoryType = "WOMENS";
  } else if (categoryName === "electronics") {
    categoryType = "ELECTRONICS";
  } else {
    categoryType = "JEWELLERY";
  }

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler) {
      navbarToggler.classList.remove("show");
    }

    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <>
      <BreadCrumb category={categoryType} title={categoryName} />
      <section className="category-products">
        <div className="container">
          <div className="row mt-3">
            {products.length === 0 ? (
              <div className="row">
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
                <div className="col-lg-4 col-6 mb-2">
                  <SkeletonCard/>
                </div>
              </div>
            ) : (
              products.map((items) => (
                <div className="col-lg-4 col-6 mb-2" key={items.id}>
                  <Pcard
                    image={items.image}
                    price={items.price}
                    title={items.title}
                    rate={items.rating.rate}
                    count={items.rating.count}
                    pid={items.id}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWiseProduct;
