import { useEffect, useState } from "react";
import Select from "./Select";

const SelectGrupoProducto = ({ handleGrupo, value }) => {
  const [grupos, setGrupos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/productos-grupos").then(async (res) => {
      setGrupos(await res.json());
    });
  }, []);
  const onChange = (g) => {
    const grupo = grupos.find((grupo) => {
      return grupo._id === g;
    });
    handleGrupo(grupo);
  };
  return <Select items={grupos} value={value} onChange={onChange} />;
};

export default SelectGrupoProducto;
