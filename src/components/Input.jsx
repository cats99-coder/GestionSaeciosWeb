import { useState } from "react";

const Input = ({
  value = "",
  onChange,
  name = "",
  type = "text",
  ...props
}) => {
  const handleValue = (event) => {
    if (name) {
      return onChange(name, event.target.value);
    } else {
      onChange(event.target.value);
    }
  };
  return (
    <input
      {...props}
      type={type}
      value={value}
      name={name}
      className={`${
        props.readonly ? "bg-blue-200 text-blue-900" : ""
      } border-2 border-blue rounded-md px-3 `}
      onChange={handleValue}
    />
  );
};

export default Input;
