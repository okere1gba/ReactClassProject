import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartDropdown: false,
  setisCartDropdown: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartDropdown, setisCartDropdown] = useState(false);
  const value = { isCartDropdown, setisCartDropdown };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
