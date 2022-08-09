import { useContext } from "react";

import { CartContext } from "../context/cart.context";

import "./card-dropdown.scss";
import Button from "../button/button.componet";
import CartItems from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Chackout</Button>
    </div>
  );
};

export default CartDropdown;
