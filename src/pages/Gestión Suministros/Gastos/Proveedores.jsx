import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../../components/Crud";
import ToolbarCrud from "../../../components/ToolbarCrud";
import AppLayout from "../../../layouts/AppLayout";
import { PagosService } from "../../../services/GestionSuministros/pagos.service";

export default function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  const [update, setUpdate] = useState(true);
  const [filtro, setFiltro] = useState("");
  const cabecera = ["Nombre"];
  const atributos = ["nombre"];
  useEffect(() => {
    fetch("http://localhost:3001/pagos").then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setProveedores(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new PagosService().deletePago(id).then(() => {
      console.log("Eliminado", id);
      setUpdate((prev) => !prev);
    });
  };
  return (
    <AppLayout
      tittle={"Proveedores"}
      toolbar={
        <ToolbarCrud
          url="/gestion-suministros/gastos/proveedores/nuevo"
          filtro={filtro}
          handleFiltro={handleFiltro}
          textoBtnNuevo="Nuevo Proveedor"
        />
      }
    >
      <Crud
        items={proveedores}
        cabecera={cabecera}
        atributos={atributos}
        filtro={filtro}
        baseUrl={"/gestion-suministros/gastos/proveedores"}
        handleDelete={handleDelete}
      />
    </AppLayout>
  );
}
