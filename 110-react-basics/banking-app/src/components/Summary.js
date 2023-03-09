import SummaryStatus from "./SummaryStatus";
import "./Summary.css";
import { expenses, balance, income } from "../data/transactionData";

function Summary() {
  return (
    <div className="summary-container">
      <SummaryStatus icon={"💵"} status={expenses + " €"} category={"Expenses"} />
      <SummaryStatus icon={"🤑"} status={balance + " €"} category={"Balance"} />
      <SummaryStatus icon={"🏦"} status={income + " €"} category={"Income"} />
    </div>
  );
}

export default Summary;
