import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

const myTodos = [
  {
    id: 1,
    title: "React Projekt Setup machen",
    notes: "mit create-react-app meine erste eigene App aufsetzen und mich mit der Ordnerstruktur vertraut machen",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Meine erste Komponente erstellen",
    notes: "eine komponente erstellen und diese einbinden",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Daten über props an Komponenten weitergeben",
    notes: "mich mit props vertraut machen und daten an eine komponente weitergeben",
    isCompleted: false,
  },
  {
    id: 4,
    title: "...Daten über props an Komponenten weitergeben",
    notes: "mich mit props vertraut machen und daten an eine komponente weitergeben",
    isCompleted: false,
  },
];

function App() {
  return (
    <>
      <div>
        <header>
          <h1>Meine erste React App</h1>
          <p>Let's get started</p>
        </header>
      </div>
      <TodoList>
        {myTodos.map((todo) => {
          return <TodoItem key={todo.id} title={todo.title} notes={todo.notes} isCompleted={todo.isCompleted} />;
        })}
      </TodoList>
    </>
  );
}

export default App;
