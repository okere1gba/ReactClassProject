import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // function 1: cheack if cartItem contains producToAdd
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // function 2: if found increment by one
  if (exitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  // function 3: return new array with modifiled cartItems /new cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartDropdown: false,
  setisCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartDropdown, setisCartDropdown] = useState(false);
  const [cartItems, setCartitems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartitems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartDropdown,
    setisCartDropdown,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
