import { useRef } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const quantity = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSelectQuantity(quantity.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={quantity}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};
export default MealItemForm;
