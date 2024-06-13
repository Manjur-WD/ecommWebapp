import axios from "axios";
import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import SkeletonCard from "./SkeletonCard";

const JewelleryCarousel = () => {
  const [jewelProduct, setjewelProducts] = useState([]);

  useEffect(() => {
    getJewelleryData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getJewelleryData = async () => {
    const apiURL =
      "https://fakestoreapi.com/products/category/jewelery?limit=4";
    const response = await axios.get(apiURL);
    const data = await response.data;
    setjewelProducts(data);
  };

  return (
    <>
      <section className=" jewellery-carousel mb-5">
        <div className="container">
          <div className="category-carousel ">
            <h2 className="fw-bold">
              Top <span> Jewellery </span> Collections
            </h2>
            <Link to="/category/jewelery">SHOW ALL</Link>
          </div>
          <div className="mt-3">
            <Carousel responsive={responsive}>
              {jewelProduct.length === 0
                ? [1, 2, 3].map((index) => (
                    <div className="item p-2 m-3" key={index}>
                      <SkeletonCard />
                    </div>
                  ))
                : jewelProduct.map((items) => (
                    <div className="item p-2 m-3" key={items.id}>
                      <Pcard
                        image={items.image}
                        price={items.price}
                        title={items.title}
                        rate={items.rating.rate}
                        count={items.rating.count}
                        pid={items.id}
                      />
                    </div>
                  ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelleryCarousel;
