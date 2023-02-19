import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Crud from "../../../components/Crud";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import AppLayout from "../../../layouts/AppLayout";

const Toolbar = ({ filtro, handleFiltro }) => {
  const router = useNavigate();
  const goTo = (url) => {
    router(url);
  };
  return (
    <div className="flex justify-end space-x-2">
      <Button onClick={() => goTo("/pagos/nuevo")}>Nuevo Pago</Button>
      <Input value={filtro} onChange={handleFiltro} />
    </div>
  );
};
export default function MetodosPago() {
  const [metodos, setMetodos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const cabecera = ["Nombre", "Método de pago"];
  const atributos = ["saecio.nombre", "metodo_pago"];
  useEffect(() => {
    fetch("http://localhost:3001/metodos-pago").then(async (res) => {
      if (!res.ok) throw new Error("Server Error");
      setMetodos(await res.json());
    });
  }, []);
  const handleFiltro = (value) => {
    setFiltro(value);
  };
  return (
    <AppLayout
      tittle={"Métodos de Pago"}
      toolbar={<Toolbar filtro={filtro} handleFiltro={handleFiltro} />}
    >
      <Crud
        items={metodos}
        cabecera={cabecera}
        atributos={atributos}
        filtro={filtro}
      />
    </AppLayout>
  );
}
