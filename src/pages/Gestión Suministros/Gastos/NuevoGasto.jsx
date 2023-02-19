import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import FormContainer from "../../../components/FormContainer";
import FormControl from "../../../components/FormControl";
import Input from "../../../components/Input";
import SelectSaecios from "../../../components/Select/SelectSaecio";
import AppLayout from "../../../layouts/AppLayout";
import { PagosService } from "../../../services/GestionSuministros/pagos.service";

export default function NuevoGasto() {
  const [gasto, setGasto] = useState({
    nombre: "",
    saecio: {
      _id: "",
    },
    receptor: {
      _id: "",
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id !== "nuevo") {
      new PagosService().getPago(id).then(async (res) => {
        setGasto(await res.json());
      });
    }
  }, []);
  const handlePago = (name, value) => {
    setGasto((prev) => ({ ...prev, [name]: value }));
  };
  const createGasto = () => {
    pagosService.createPago(gasto).then(() => {
      navigate("/gestion-suministros/pagos");
    });
  };
  const updateGasto = () => {
    pagosService.updatePago(id, gasto).then(() => {
      navigate("/gestion-suministros/pagos");
    });
  };
  const pagosService = new PagosService();
  return (
    <AppLayout tittle={"Gasto"}>
      <FormContainer>
        <FormControl label={"Número de registro"}>
          <Input
            value={gasto.numero}
            readonly="true"
            name="numero"
          />
        </FormControl>
        
        <div className="col-span-4 flex gap-2">
          <Button onClick={id == "nuevo" ? createGasto : updateGasto}>
            Guardar
          </Button>
        </div>
      </FormContainer>
    </AppLayout>
  );
}
