import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
const MealItem = (props) => {
  let { addItem } = useContext(CartContext);
  let price = `$${props.price.toFixed(2)}`;

  const quantityHandler = (quantity) => {
    let item = {
      name: props.name,
      price: props.price,
      quantity: quantity,
      id: props.id,
    };
    addItem(item);
  };
  return (
    <li className={`list-group-item`}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onSelectQuantity={quantityHandler} />
      </div>
    </li>
  );
};
export default MealItem;
