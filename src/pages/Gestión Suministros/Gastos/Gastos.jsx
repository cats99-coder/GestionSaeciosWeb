import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../../components/Crud";
import ToolbarCrud from "../../../components/ToolbarCrud";
import AppLayout from "../../../layouts/AppLayout";
import { GastosService } from "../../../services/GestionSuministros/gastos.service";
import { PagosService } from "../../../services/GestionSuministros/pagos.service";

export default function Gastos() {
  const [gastos, setGastos] = useState([]);
  const [update, setUpdate] = useState(true)
  const [filtro, setFiltro] = useState("");
  const cabecera = [
    "Número",
    "Fecha",
    "Cantidad",
    "Precio",
    "Total"
  ];
  const atributos = [
    "numero",
    "fecha",
    "proveedor.nombre",
    "precio",
    "total"
  ];
  useEffect(() => {
    fetch("http://localhost:3001/gastos").then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setGastos(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new GastosService().deleteGasto(id).then(() => {
      console.log("Eliminado", id);
      setUpdate((prev) => !prev);
    });
  };
  return (

      <AppLayout
        tittle={"Gastos"}
        toolbar={
          <ToolbarCrud
            url="/gestion-suministros/gastos/nuevo"
            filtro={filtro}
            handleFiltro={handleFiltro}
            textoBtnNuevo="Nuevo Gasto"
          />
        }
      >
        <Crud
          items={gastos}
          cabecera={cabecera}
          atributos={atributos}
          filtro={filtro}
          baseUrl={"/gestion-suministros/gastos"}
          handleDelete={handleDelete}
        />
      </AppLayout>
  );
}
