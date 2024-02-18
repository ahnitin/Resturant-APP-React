import Model from "../UI/Model";
import { IoMdClose } from "react-icons/io";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];
  return (
    <Model onHideCart={props.onHideCart}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={props.onHideCart}
      >
        <IoMdClose />
      </span>
      <ul>
        {cartItems.map((item) => (
          <li>item.name</li>
        ))}
      </ul>
      <div>
        <span>Total Amount: </span>
        <span>35.62</span>
      </div>
      <div>
        <button onClick={props.onHideCart}>Close</button>
        <button>Order</button>
      </div>
    </Model>
  );
};
export default Cart;
