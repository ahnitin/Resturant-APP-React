import Card from "../UI/Card";
import MealItem from "./MealITem/MealItem";
const AvailableMeals = () => {
  let meals = [
    {
      id: "m1",
      name: "Burger",
      description: "Cheesy Burger",
      price: 29.44,
    },
    {
      id: "m2",
      name: "Sandwitch",
      description: "Paneer Stuffed Sandwitch",
      price: 49.44,
    },
  ];
  return (
    <>
      <section>
        <ul className="list-group">
          {meals.map((meal) => (
            <Card>
              <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            </Card>
          ))}
        </ul>
      </section>
    </>
  );
};
export default AvailableMeals;
