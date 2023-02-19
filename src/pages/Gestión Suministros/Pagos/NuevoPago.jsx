import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import FormContainer from "../../../components/FormContainer";
import FormControl from "../../../components/FormControl";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import SelectSaecios from "../../../components/Select/SelectSaecio";
import AppLayout from "../../../layouts/AppLayout";
import { PagosService } from "../../../services/GestionSuministros/pagos.service";
import { SaeciosService } from "../../../services/Saecios/saecios.service";

export default function NuevoPago() {
  const [pago, setPago] = useState({
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
        setPago(await res.json());
      });
    }
  }, []);
  const handlePago = (name, value) => {
    setPago((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaecio = (saecio) => {
    if (!saecio) {
      handlePago("saecio", null);
    } else {
      handlePago("saecio", saecio._id);
    }
  };
  const handleReceptor = (saecio) => {
    if (!saecio) {
      handlePago("receptor", null);
    } else {
      handlePago("receptor", saecio._id);
    }
  };
  const createPago = () => {
    pagosService.createPago(pago).then(() => {
      navigate("/gestion-suministros/pagos");
    });
  };
  const updatePago = () => {
    pagosService.updatePago(id, pago).then(() => {
      navigate("/gestion-suministros/pagos");
    });
  };
  const pagosService = new PagosService();
  return (
    <AppLayout tittle={"Pago"}>
      <FormContainer>
        <FormControl label={"Cantidad"}>
          <Input
            value={pago.cantidad}
            onChange={handlePago}
            name="cantidad"
            type="number"
            step="0.01"
            min="0"
            max="1000"
          />
        </FormControl>
        <FormControl label={"Saecio"}>
          <SelectSaecios
            handleSaecio={handleSaecio}
            value={pago.saecio ? pago.saecio._id : ""}
          />
        </FormControl>
        <FormControl label={"Fecha"}>
          <Input
            value={pago.nombre}
            onChange={handlePago}
            type="date"
            name="fecha"
          />
        </FormControl>
        <FormControl label={"Receptor"}>
          <SelectSaecios
            handleSaecio={handleReceptor}
            value={pago.receptor ? pago.receptor._id : ""}
          />
        </FormControl>
        <FormControl label={"Métodos de pago"} span={2}>
          <Input value={pago.precio} onChange={handlePago} name="precio" />
        </FormControl>
        <div className="col-span-4">
          <Button onClick={id == "nuevo" ? createPago : updatePago}>
            Guardar
          </Button>
        </div>
      </FormContainer>
    </AppLayout>
  );
}
