import { useEffect, useState } from "react";
import { GastosService } from "../../services/GestionSuministros/gastos.service";

const Select = ({ onChange, name = "", items, value, handleNewProveedor }) => {
  const handleValue = (event) => {
    if (name) {
      return onChange(name, event.target.value);
    } else {
      onChange(event.target.value);
    }
  };
  const crearNuevoGrupo = () => {
    handleNewProveedor();
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
      <button
        type="button"
        onClick={crearNuevoGrupo}
        className="bg-blue flex justify-center items-center text-white px-2 hover:bg-blue-600 rounded-md"
      >
        +
      </button>
    </div>
  );
};
const SelectProveedor = ({ handleProveedor, value }) => {
  const [proveedores, setProveedores] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    new GastosService().getProveedores().then(async (res) => {
      setProveedores(await res.json());
    });
  }, [update]);
  const onChange = (p) => {
    const proveedor = proveedores.find((proveedor) => {
      return proveedor._id === p;
    });
    handleProveedor(proveedor);
  };
  const handleNewProveedor = () => {
    const nombre = prompt("Indique el nombre del proveedor");
    if (
      nombre &&
      window.confirm(`¿Está seguro/a que desea crear el proveedor: ${nombre}?`)
    ) {
      new GastosService().createProveedor({ nombre }).then(() => {
        setUpdate((prev) => !prev);
      });
    }
  };
  return (
    <Select
      items={proveedores}
      value={value}
      handleNewProveedor={handleNewProveedor}
      onChange={onChange}
    />
  );
};

export default SelectProveedor;
