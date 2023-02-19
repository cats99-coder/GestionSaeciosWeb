const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue hover:bg-blue-600 active:bg-blue-300 rounded-md text-white w-full px-2"
    >
      {children}
    </button>
  );
};

export default Button;
