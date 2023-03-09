import "./Transaction.css";

function Transaction(props) {
  return (
    <div className="transaction">
      <div className="transaction-name">
        <p>{props.icon}</p>
        <div>
          <p className="transaction-title">{props.title}</p>
          <h6 className="category-name">{props.categoryName}</h6>
        </div>
      </div>
      <span>{props.amount + " €"}</span>
    </div>
  );
}

export default Transaction;
