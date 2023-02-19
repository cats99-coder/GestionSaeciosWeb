const FormControl = ({ children, label, span = 1 }) => {
  return (
    <label
      className={`flex flex-col ${span === 1 ? "col-span-2" : "col-span-4"}`}
    >
      <span className="text-sm">{label}</span>
      {children}
    </label>
  );
};

export default FormControl;
