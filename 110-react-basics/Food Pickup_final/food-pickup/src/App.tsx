import './App.css';
import { Card } from './atoms/Card';
import { OrderNumberForm } from './molecules/OrderNumberForm';
import { createFirebaseOrder, useFirebaseOrders } from './utils/firebase-utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersList } from './OrdersList';

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrdersList />}></Route>
          <Route
            path="/admin"
            element={
              <>
                <Card className="m-4 w-1/2">
                  <OrderNumberForm onEnteredOrderNumber={createFirebaseOrder}></OrderNumberForm>
                </Card>
                <OrdersList />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
