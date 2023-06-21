import { Meal } from "../../App";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS: Meal[] = [
  {
    id: "m1",
    name: "Bärentatzen-Menü",
    description: "mit Pommes und Getränk",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pezitatzen-Menü",
    description: "mit Pommes und Getränk",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Bären-Menü",
    description: "mit Pommes und Getränk",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Pezi-Teller",
    description: "mit Pommes und Getränk",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Bauerncordon-Menü",
    description: "mit Pommes und Getränk",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
