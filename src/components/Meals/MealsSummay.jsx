import styles from './MealsSummary.module.css';
const MealSummary = () => {
  return (
    <>
      <summary className={styles.summary}>
        <h1> Delicious Food, Delivered To You!</h1>
        <p>
          Choose Your favourate meal from our board selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just in time{" "}
          and of course by experianced chefs!
        </p>
      </summary>
    </>
  );
};
export default MealSummary;
