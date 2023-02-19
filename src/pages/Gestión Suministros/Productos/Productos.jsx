import { useEffect } from "react";
import { useState } from "react";
import Crud from "../../../components/Crud";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import ToolbarCrud from "../../../components/ToolbarCrud";
import AppLayout from "../../../layouts/AppLayout";
import { ProductosService } from "../../../services/GestionSuministros/productos.service";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [update, setUpdate] = useState(true);
  const [filtro, setFiltro] = useState("");
  const cabecera = ["Nombre", "Grupo"];
  const atributos = ["nombre", "grupo.nombre"];
  useEffect(() => {
    new ProductosService().getProductos().then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setProductos(await res.json());
    });
  }, [update]);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  const handleDelete = (id) => {
    new ProductosService().deleteProducto(id).then(() => {
      setUpdate((prev) => !prev);
    });
  };
  return (

      <AppLayout
        tittle={"Productos"}
        toolbar={
          <ToolbarCrud
            url={"/gestion-suministros/productos/nuevo"}
            textoBtnNuevo="Nuevo Producto"
            filtro={filtro}
            handleFiltro={handleFiltro}
          />
        }
      >
        <Crud
          items={productos}
          cabecera={cabecera}
          atributos={atributos}
          filtro={filtro}
          baseUrl="/gestion-suministros/productos"
          handleDelete={handleDelete}
        />
      </AppLayout>
  );
}
