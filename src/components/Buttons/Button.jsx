const Button = ({ handleClick, children, mainColor }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`button is-${mainColor} is-outlined`}
    >
      {children}
    </button>
  );
};

export default Button;
