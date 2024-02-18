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
        <ul>
          {meals.map((meal) => (
            <li>
              {meal.name}
              {meal.description}
              {meal.price}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default AvailableMeals;
