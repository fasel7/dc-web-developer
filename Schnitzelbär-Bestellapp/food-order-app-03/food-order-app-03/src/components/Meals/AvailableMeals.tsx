import { Meal } from '../../model/meal';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Bärentatzen-Menü',
    description: 'mit Pommes und Getränk',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pezitatzen-Menü',
    description: 'mit Pommes und Getränk',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Bären-Menü',
    description: 'mit Pommes und Getränk',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pezi-Teller',
    description: 'mit Pommes und Getränk',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Bauerncordon-Menü',
    description: 'mit Pommes und Getränk',
    price: 18.99,
  },
];

interface AvailableMealsProps {}

const AvailableMeals = (props: AvailableMealsProps) => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
