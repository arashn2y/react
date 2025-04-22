import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = indexToDelete => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container py-4">
      <Input input={input} setInput={setInput} />
      <Button text="Add Todo" onClick={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
