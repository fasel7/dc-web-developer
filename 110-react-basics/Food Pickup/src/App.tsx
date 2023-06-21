import { useState } from "react";

import "./App.css";
import NewOrder from "./components/New Order/NewOrder";

function App() {
  const addOrderHandler = (orderNumber: string) => {};

  return (
    <div className="App">
      <NewOrder onAddOrder={addOrderHandler} />
    </div>
  );
}

export default App;
