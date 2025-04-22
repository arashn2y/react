const Button = props => {
  const { text, onClick } = props;
  return (
    <button className="btn btn-primary mb-2" onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
