import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../../components/Crud";
import Header from "../../../components/Header";
import ToolbarCrud from "../../../components/ToolbarCrud";
import AppLayout from "../../../layouts/AppLayout";
import { ProductosService } from "../../../services/GestionSuministros/productos.service";

export default function GruposProductos() {
  const [grupos, setGrupos] = useState([]);
  const [update, setUpdate] = useState(true);
  const [filtro, setFiltro] = useState("");
  const cabecera = ["Nombre"];
  const atributos = ["nombre"];
  useEffect(() => {
    new ProductosService().getGrupos().then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setGrupos(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new ProductosService().deleteGrupo(id).then(() => {
      setUpdate((prev) => !prev);
    });
  };
  return (
    <AppLayout
      tittle={"Grupos"}
      toolbar={
        <ToolbarCrud
          url={"/gestion-suministros/productos/grupos/nuevo"}
          textoBtnNuevo="Nuevo Grupo"
          filtro={filtro}
          handleFiltro={handleFiltro}
        />
      }
    >
      <Crud
        items={grupos}
        cabecera={cabecera}
        atributos={atributos}
        filtro={filtro}
        baseUrl="/gestion-suministros/productos/grupos"
        handleDelete={handleDelete}
      />
    </AppLayout>
  );
}
