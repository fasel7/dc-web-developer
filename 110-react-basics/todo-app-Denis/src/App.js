import "./App.css";
import Headline from "./components/Headline";
import Paragraph from "./components/Paragraph";
import Box from "./components/Box";
import TodoList from "./components/TodoList";
import { todoData } from "./data/todoData";

function App() {
  const openTasks = todoData.filter((todo) => {
    return !todo.isCompleted;
  });
  const completedTasks = todoData.filter((todo) => {
    return todo.isCompleted;
  });

  return (
    <>
      <Headline text="My ToDo's" />
      <Box color="lightblue">
        <Paragraph>Your To-Do's</Paragraph>
      </Box>
      <h2>Offene Tasks</h2>
      <TodoList todos={openTasks} sortByDueDate={true}></TodoList>
      <h2>Erledigte Tasks</h2>
      <TodoList todos={completedTasks}></TodoList>
    </>
  );
}

export default App;
