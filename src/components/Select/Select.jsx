const Select = ({ onChange, name = "", items, value }) => {
  const handleValue = (event) => {
    if (name) {
      return onChange(name, event.target.value);
    } else {
      onChange(event.target.value);
    }
  };
  return (
    <select
      name={name}
      className="border-2 border-blue rounded-md px-3"
      onChange={handleValue}
      value={value}
    >
      <option></option>
      {items &&
        items.map((item) => {
          return (
            <option
              label={item.nombre}
              value={item._id}
              key={item._id}
            ></option>
          );
        })}
    </select>
  );
};

export default Select;
