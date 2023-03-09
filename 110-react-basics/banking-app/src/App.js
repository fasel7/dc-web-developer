import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Summary from "./components/Summary";
import TransactionGroup from "./components/TransactionGroup";

function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Overview />
      <TransactionGroup />
    </div>
  );
}

export default App;
