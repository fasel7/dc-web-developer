function SummaryStatus(props) {
  return (
    <div className="summary-status">
      <p>{props.icon}</p>
      <p>{props.status}</p>
      <h6>{props.category}</h6>
    </div>
  );
}

export default SummaryStatus;
