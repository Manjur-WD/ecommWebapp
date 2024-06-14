import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/remixicon/fonts/remixicon.css";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/react-loading-skeleton/dist/skeleton.css";
import "../node_modules/react-multi-carousel/lib/styles.css";
import "animate.css/animate.min.css";
import { CartProvider } from "./contexts/CartContext.jsx";
import { WishListProvider } from "./contexts/WishListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WishListProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </WishListProvider>
);
