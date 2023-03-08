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
      <optgroup label="Bizum">
        {items &&
          items
            .filter((item) => {
              return item.tipo === "bizum";
            })
            .map((item) => {
              return (
                <option
                  label={`Bizum - ${item.numero_telefono} - ${item.nombre}`}
                  value={item._id}
                  key={item._id}
                ></option>
              );
            })}
      </optgroup>
      <optgroup label="Cuenta Bancaria">
        {items &&
          items
            .filter((item) => {
              return item.tipo === "cuenta_bancaria";
            })
            .map((item) => {
              return (
                <option
                  label={`Cuenta Bancaria - ${item.numero_telefono} - ${item.nombre}`}
                  value={item._id}
                  key={item._id}
                ></option>
              );
            })}
      </optgroup>
      <optgroup label="Efectivo">
        {items &&
          items
            .filter((item) => {
              return item.tipo === "efectivo";
            })
            .map((item) => {
              return (
                <option
                  label={`Bizum - ${item.numero_telefono} - ${item.nombre}`}
                  value={item._id}
                  key={item._id}
                ></option>
              );
            })}
      </optgroup>
    </select>
  );
};
const SelectMetodoPago = ({ handleMetodo, value }) => {
  const [metodos, setMetodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/metodos-pago").then(async (res) => {
      setMetodos(await res.json());
    });
  }, []);
  const onChange = (g) => {
    const metodo = metodos.find((metodo) => {
      return metodo._id === g;
    });
    handleMetodo(metodo);
  };
  return <Select items={metodos} value={value} onChange={onChange} />;
};

export default SelectMetodoPago;
