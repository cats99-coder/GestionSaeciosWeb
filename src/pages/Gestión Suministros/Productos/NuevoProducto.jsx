import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import FormContainer from "../../../components/FormContainer";
import FormControl from "../../../components/FormControl";
import Input from "../../../components/Input";
import SelectGrupoProducto from "../../../components/Select/SelectGrupoProducto";
import AppLayout from "../../../layouts/AppLayout";
import { ProductosService } from "../../../services/GestionSuministros/productos.service";

export default function NuevoProducto() {
  const [producto, setProducto] = useState({
    nombre: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== "nuevo") {
      fetch(`http://localhost:3001/productos/${id}`).then(async (res) => {
        setProducto(await res.json());
      });
    }
  }, []);
  const handleProducto = (name, value) => {
    setProducto((prev) => ({ ...prev, [name]: value }));
  };
  const handleGrupo = (grupo) => {
    handleProducto("grupo", grupo._id);
  };
  const crearProducto = () => {
    new ProductosService().createProducto(producto).then(() => {
      navigate("/gestion-suministros/productos");
    });
  };
  const modificarProducto = () => {
    new ProductosService().updateProducto(id, producto).then(() => {
      navigate("/gestion-suministros/productos");
    });
  };
  console.log(producto);
  return (
    <AppLayout tittle={"Producto"}>
      <FormContainer>
        <FormControl label={"Nombre"} span={2}>
          <Input
            value={producto.nombre}
            onChange={handleProducto}
            name="nombre"
          />
        </FormControl>
        <FormControl label={"Grupo"}>
          <SelectGrupoProducto
            value={producto.grupo}
            handleGrupo={handleGrupo}
          />
        </FormControl>
        <FormControl label={"Precio"} span={2}>
          <Input
            value={producto.precio}
            onChange={handleProducto}
            name="precio"
          />
        </FormControl>
        <div className="col-span-4">
          <Button onClick={id == "nuevo" ? crearProducto : modificarProducto}>
            Guardar
          </Button>
        </div>
      </FormContainer>
    </AppLayout>
  );
}
