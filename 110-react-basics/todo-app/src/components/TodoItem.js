import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <div className="isCompleted">{props.isCompleted ? "✅" : ""}</div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.notes}</p>
      </div>
    </div>
  );
}

export default TodoItem;
