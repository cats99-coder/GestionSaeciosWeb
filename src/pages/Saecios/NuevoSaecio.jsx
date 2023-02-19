import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import FormContainer from "../../components/FormContainer";
import FormControl from "../../components/FormControl";
import Input from "../../components/Input";
import AppLayout from "../../layouts/AppLayout";
import { SaeciosService } from "../../services/Saecios/saecios.service";

export default function NuevoSaecio() {
  const [saecio, setSaecio] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== "nuevo") {
      new SaeciosService().getSaecio(id).then(async (res)=> {
        setSaecio(await res.json())
      })
    }
  }, []);
  const handleSaecio = (name, value) => {
    setSaecio((prev) => ({ ...prev, [name]: value }));
  };
  const crearSaecio = () => {
    fetch(`http://localhost:3001/saecios/`, {
      method: "POST",
      body: JSON.stringify(saecio),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(async (res) => {
      navigate(`/saecios/`);
    });
  };
  const modificarSaecio = () => {
    fetch(`http://localhost:3001/saecios/${id}`, {
      method: "POST",
      body: JSON.stringify(saecio),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(async (res) => {
      navigate(`/saecios/`);
    });
  };
  return (

      <AppLayout tittle={"Saecios"}>
        <FormContainer>
          <FormControl label={"Primer Apellido"}>
            <Input
              value={saecio.apellido1}
              onChange={handleSaecio}
              name="apellido1"
            />
          </FormControl>
          <FormControl label={"Segundo Apellido"}>
            <Input
              value={saecio.apellido2}
              onChange={handleSaecio}
              name="apellido2"
            />
          </FormControl>
          <FormControl label={"Nombre"}>
            <Input
              value={saecio.nombre}
              onChange={handleSaecio}
              name="nombre"
            />
          </FormControl>
          <FormControl label={"Email"}>
            <Input
              value={saecio.email}
              onChange={handleSaecio}
              name="email"
              type="email"
            />
          </FormControl>
          <div className="col-span-4">
            <Button onClick={id == "nuevo" ? crearSaecio : modificarSaecio}>
              {id == "nuevo" ? "Crear" : "Modificar"}
            </Button>
          </div>
        </FormContainer>
      </AppLayout>
  );
}
