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
    <div className="flex space-x-2">
      <select
        name={name}
        className="border-2 border-blue rounded-md px-3 grow"
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
    </div>
  );
};
const SelectProducto = ({ handleProducto, value }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/productos").then(async (res) => {
      setProductos(await res.json());
    });
  }, []);
  const onChange = (p) => {
    const producto = productos.find((producto) => {
      return producto._id === p;
    });
    handleProducto(producto);
  };
  return <Select items={productos} value={value} onChange={onChange} />;
};

export default SelectProducto;
