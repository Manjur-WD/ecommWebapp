import { createContext, useState } from "react";

const WishListContext = createContext({
  wishlistItems: [],
  addtoWishList: () => {},
  removefromWishList: () => {},
});

const WishListProvider = ({ children }) => {
  const [wishlistItems, setWishList] = useState([]);

  const addtoWishList = (item) => {
    wishlistItems.map((prod) => {
      if (item.id === prod.id) {
        console.warn("Item already exists in wishlist.");
      }
      return;
    });
    setWishList([...wishlistItems, item]);
  };

  const removefromWishList = (itemId) => {
    const itemIndex = wishlistItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      wishlistItems.splice(itemIndex, 1);
      setWishList([...wishlistItems]);
    }
  };

  const value = { wishlistItems, addtoWishList, removefromWishList };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export { WishListContext, WishListProvider };
