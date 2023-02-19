import { useEffect, useState } from "react";

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
              label={`${item.nombre} ${item.apellido1} ${item.apellido2}`}
              value={item._id}
              key={item._id}
            ></option>
          );
        })}
    </select>
  );
};
const SelectSaecios = ({ handleSaecio, value }) => {
  const [saecios, setSaecios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/saecios").then(async (res) => {
      setSaecios(await res.json());
    });
  }, []);
  const onChange = (g) => {
    const saecio = saecios.find((saecio) => {
      return saecio._id === g;
    });
    handleSaecio(saecio);
  };
  return <Select items={saecios} value={value} onChange={onChange} />;
};

export default SelectSaecios;
