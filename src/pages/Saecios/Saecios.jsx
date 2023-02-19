import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../components/Crud";
import Header from "../../components/Header";
import ToolbarCrud from "../../components/ToolbarCrud";
import AppLayout from "../../layouts/AppLayout";
import { SaeciosService } from "../../services/Saecios/saecios.service";

export default function Saecios() {
  const [update, setUpdate] = useState(true);
  const [saecios, setSaecios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const cabecera = ["Nombre", "Primer Apellido", "Segundo Apellido", "Email"];
  const atributos = ["nombre", "apellido1", "apellido2", "email"];
  useEffect(() => {
    new SaeciosService().getSaecios().then(async (res) => {
      setSaecios(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new SaeciosService().deleteSaecio(id).then(() => {
      console.log("Eliminado", id);
      setUpdate((prev) => !prev);
    });
  };
  return (
    <>
      <AppLayout
        tittle={"Saecios"}
        toolbar={
          <ToolbarCrud
            url={"/saecios/nuevo"}
            filtro={filtro}
            handleFiltro={handleFiltro}
            textoBtnNuevo='Nuevo Saecio'
          />
        }
      >
        <Crud
          items={saecios}
          cabecera={cabecera}
          atributos={atributos}
          filtro={filtro}
          baseUrl="/saecios"
          handleDelete={handleDelete}
        />
      </AppLayout>
    </>
  );
}
