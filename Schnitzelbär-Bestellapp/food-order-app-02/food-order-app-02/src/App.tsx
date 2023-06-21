import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const App = () => {
  return (
    <>
      <Cart />
      <Header />;
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
