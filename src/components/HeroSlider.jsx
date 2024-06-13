import React from "react";
import mensBanner from "../assets/images/mens-banner.png";
import womenBanner from "../assets/images/women.png";
import electronicsBanner from "../assets/images/electronics.png";
import jewelleryBanner from "../assets/images/jewellery.png";

import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <>
      <section className="banner">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-item one">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2 className="font-monoton">Men's Collection</h2>
                      <p className="lead text-dark">
                        Welcome to the epitome of men's fashion. Dive into a
                        world where style meets substance. Unleash your inner fashionista...
                      </p>
                      <Link to="/category/men's clothing" className="btn btn-dark rounded-0 px-5 py-2 fs-5">Explore Men's Collection</Link>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={mensBanner} alt="mens banner image" className="img-fluid" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item two">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2 className="font-monoton">Women's Fashion</h2>
                      <p className="lead text-dark">
                        Indulge in the essence of femininity with our Women's
                        Fashion collection. Unleash your inner fashionista...
                      </p>
                      <Link to="/category/women's clothing" className="btn btn-dark rounded-0 px-5 py-2 fs-5">Top Women's Fashion</Link>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={womenBanner} alt="womens banner image" className="img-fluid" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item three">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2 className="font-monoton">Electronics Hub</h2>
                      <p className="lead text-dark">
                        Welcome to the Electronics Hub, where innovation meets
                        functionality. Explore a world of cutting-edge
                        technology...
                      </p>
                      <Link to="/category/electronics" className="btn btn-dark rounded-0 px-5 py-2 fs-5">Explore Electronics</Link>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={electronicsBanner} alt="electronics banner image" className="img-fluid" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item four">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2 className="font-monoton">Top Jewellery</h2>
                      <p className="lead text-dark">
                        Embark on a journey through our Jewelry Extravaganza – a
                        realm of timeless elegance and modern sophistication...
                      </p>
                      <Link to="/category/jewelery" className="btn btn-dark rounded-0 px-5 py-2 fs-5">Discover Jewellery</Link>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={jewelleryBanner} alt="jewellery banners image" className="img-fluid" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
