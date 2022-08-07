import { createContext, useState } from "react";

import PRODUCTS from "../../store-data/shop-data.json";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
