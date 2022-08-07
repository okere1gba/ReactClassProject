import "./card-dropdown.scss";
import Button from "../button/button.componet";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>Go to Chackout</Button>
    </div>
  );
};

export default CartDropdown;
