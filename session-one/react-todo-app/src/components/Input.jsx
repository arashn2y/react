const Input = props => {
  const { input, setInput } = props;
  return <input type="text" className="form-control mb-2" placeholder="Add a new todo" value={input} onChange={e => setInput(e.target.value)} />;
};
export default Input;
