import { useEffect, useState } from "react";
import { ProductosService } from "../../services/GestionSuministros/productos.service";

const Select = ({ onChange, name = "", items, value, handleNewGrupo }) => {
  const handleValue = (event) => {
    if (name) {
      return onChange(name, event.target.value);
    } else {
      onChange(event.target.value);
    }
  };
  const crearNuevoGrupo = () => {
    handleNewGrupo();
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
const SelectGrupoProducto = ({ handleGrupo, value }) => {
  const [grupos, setGrupos] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/productos-grupos").then(async (res) => {
      setGrupos(await res.json());
    });
  }, [update]);
  const onChange = (g) => {
    const grupo = grupos.find((grupo) => {
      return grupo._id === g;
    });
    handleGrupo(grupo);
  };
  const handleNewGrupo = () => {
    const nombre = prompt("Indique el nombre del grupo");
    if (
      nombre &&
      window.confirm(`¿Está seguro/a que desea crear el grupo: ${nombre}?`)
    ) {
      new ProductosService().createGrupo({ nombre }).then(() => {
        setUpdate((prev) => !prev);
      });
    }
  };
  return (
    <Select
      items={grupos}
      value={value}
      handleNewGrupo={handleNewGrupo}
      onChange={onChange}
    />
  );
};

export default SelectGrupoProducto;
