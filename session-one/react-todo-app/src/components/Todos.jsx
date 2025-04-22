import Todo from "./Todo";

const Todos = props => {
  const { todos, deleteTodo } = props;
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default Todos;
