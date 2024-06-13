import React from "react";
import { Link } from "react-router-dom";
import category1Image from "../assets/images/mens-breadcrumb.jpeg";
import category2Image from "../assets/images/women-breadcrumb.jpg";
import category3Image from "../assets/images/electronics-breadcrumb.jpg";
import category4Image from "../assets/images/jewelery-bread-crumb.webp";
import category5Image from "../assets/images/eCommerce.jpg";


const BreadCrumb = (props) => {
  const getImgUrl = () => {
    if (props.title == "men's clothing") return category1Image;
    else if (props.title === "women's clothing") return category2Image;
    else if (props.title === "electronics") return category3Image;
    else if (props.title === "Product Details") return category5Image;
    else return category4Image;
  };

  let imgUrl = getImgUrl();


  return (
    <>
      <section
        className="bread-crumb d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.459), #ff800077), url(${imgUrl}) no-repeat top/cover`,
        }}
      >
        <div className="bread-crumb-content">
          <p className="text-white fs-5 p-1 text-center">
            <span>Home</span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-capitalize">
              <Link to={`/category/${props.category}`}>{props.title}</Link>
            </span>
          </p>
          <h1 className="text-center fw-bolder font-monoton">{props.category}</h1>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
