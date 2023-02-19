import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import FormContainer from "../../../components/FormContainer";
import FormControl from "../../../components/FormControl";
import Input from "../../../components/Input";
import AppLayout from "../../../layouts/AppLayout";
import { ProductosService } from "../../../services/GestionSuministros/productos.service";

export default function NuevoGrupo() {
  const [grupo, setGrupo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== "nuevo") {
      new ProductosService().getGrupo(id).then((grupo) => {
        setGrupo(grupo);
      });
    }
  }, []);
  const handleProducto = (name, value) => {
    setGrupo((prev) => ({ ...prev, [name]: value }));
  };
  const createGrupo = () => {
    new ProductosService().createGrupo(grupo).then(() => {
      navigate("/gestion-suministros/productos/grupos");
    });
  };
  const updateGrupo = () => {
    new ProductosService().updateGrupo(id, grupo).then(() => {
      navigate("/gestion-suministros/productos");
    });
  };
  return (
      <AppLayout tittle={"Grupo de producto"}>
        <FormContainer>
          <FormControl label={"Nombre"} span={2}>
            <Input
              value={grupo.nombre}
              onChange={handleProducto}
              name="nombre"
            />
          </FormControl>
          <div className="col-span-4">
            <Button onClick={id == "nuevo" ? createGrupo : updateGrupo}>
              Guardar
            </Button>
          </div>
        </FormContainer>
      </AppLayout>
  );
}
