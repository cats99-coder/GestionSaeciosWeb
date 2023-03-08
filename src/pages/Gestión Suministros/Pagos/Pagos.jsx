import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../../components/Crud";
import ToolbarCrud from "../../../components/ToolbarCrud";
import AppLayout from "../../../layouts/AppLayout";
import { PagosService } from "../../../services/GestionSuministros/pagos.service";

export default function Pagos() {
  const [pagos, setPagos] = useState([]);
  const [update, setUpdate] = useState(true)
  const [filtro, setFiltro] = useState("");
  const cabecera = [
    "Fecha",
    "Nombre",
    "Receptor",
    "Método de pago",
    "Cantidad",
  ];
  const atributos = [
    "fecha",
    "saecio.nombre",
    "receptor.nombre",
    "metodo_pago.tipo",
    "cantidad",
  ];
  useEffect(() => {
    fetch("http://localhost:3001/pagos").then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setPagos(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new PagosService().deletePago(id).then(() => {
      setUpdate((prev) => !prev);
    });
  };
  return (

      <AppLayout
        tittle={"Pagos"}
        toolbar={
          <ToolbarCrud
            url="/gestion-suministros/pagos/nuevo"
            filtro={filtro}
            handleFiltro={handleFiltro}
            textoBtnNuevo="Nuevo Pago"
          />
        }
      >
        <Crud
          items={pagos}
          cabecera={cabecera}
          atributos={atributos}
          filtro={filtro}
          baseUrl={"/gestion-suministros/pagos"}
          handleDelete={handleDelete}
        />
      </AppLayout>
  );
}
