import React, { useContext } from "react";
import HeroSlider from "../components/HeroSlider";
import Category from "../components/Category";
import MenCarousel from "../components/MenCarousel";
import WomenCarousel from "../components/WomenCarousel";
import ElectronicsCarousel from "../components/ElectronicsCarousel";
import JewelleryCarousel from "../components/JewelleryCarousel";
import { useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

const HomePage = () => {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    navbarToggler.classList.remove("show");
  }, []);

  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <HeroSlider />
      <Category />
      <MenCarousel />
      <WomenCarousel />
      <ElectronicsCarousel />
      <JewelleryCarousel />
    </>
  );
};

export default HomePage;
