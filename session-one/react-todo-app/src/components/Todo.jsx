const Todo = props => {
  const { todo, index, deleteTodo } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo}
      <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};
export default Todo;
