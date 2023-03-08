const Input = ({
  value = "",
  onChange,
  onBlur,
  name = "",
  type = "text",
  ...props
}) => {
  const handleChange = (event) => {
    if (onChange) {
      if (name) {
        return onChange(name, event.target.value);
      } else {
        onChange(event.target.value);
      }
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      if (name) {
        return onBlur(name, event.target.value);
      } else {
        onBlur(event.target.value);
      }
    }
  };
  return (
    <input
      {...props}
      type={type}
      value={value}
      name={name}
      className={`${
        props.readOnly ? "bg-blue-200 text-blue-900" : ""
      } border-2 border-blue rounded-md px-3 `}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
