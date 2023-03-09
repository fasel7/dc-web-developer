import "./TransactionGroup.css";
import Transaction from "./Transaction";
import { categories } from "../data/categoriesData";
import { transactions } from "../data/transactionData";

function TransactionGroup() {
  return (
    <div className="transaction-container">
      {transactions.map((transaction) => {
        return (
          <Transaction
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            categoryName={categories[transaction.category].name}
            icon={categories[transaction.category].icon}
          ></Transaction>
        );
      })}
    </div>
  );
}

export default TransactionGroup;
