import logo from "./logo.svg";
import "./App.scss";
import AddForm from "./Components/AddForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <AddForm />
      <TaskList />
    </div>
  );
}

export default App;
