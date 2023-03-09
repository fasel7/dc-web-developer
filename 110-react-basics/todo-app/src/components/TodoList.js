import "./TodoList.css";

function TodoList(props) {
  return (
    <>
      <div className="todo-list">{props.children}</div>
    </>
  );
}

export default TodoList;
