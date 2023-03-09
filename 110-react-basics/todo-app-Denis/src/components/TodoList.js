import TodoItem from "./TodoItem";

export default function TodoList({ todos, sortByDueDate = false }) {
  console.log(todos);

  if (sortByDueDate) {
    todos.sort((a, b) => {
      return a.dueDate - b.dueDate;
    });
  }

  let todoComponentElements = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        title={todo.title}
        isCompleted={todo.isCompleted}
        dueDate={todo.dueDate}
        notes={todo.notes}
      />
    );
  });

  return <>{todoComponentElements}</>;
}
