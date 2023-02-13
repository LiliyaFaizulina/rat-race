const Button = ({ handleClick, children }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="button is-primary is-outlined"
    >
      {children}
    </button>
  );
};

export default Button;
