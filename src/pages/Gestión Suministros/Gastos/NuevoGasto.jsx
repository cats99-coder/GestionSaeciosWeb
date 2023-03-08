import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import FormContainer from "../../../components/FormContainer";
import FormControl from "../../../components/FormControl";
import Input from "../../../components/Input";
import SelectProducto from "../../../components/Select/SelectProducto";
import SelectProveedor from "../../../components/Select/SelectProveedor";
import SelectSaecios from "../../../components/Select/SelectSaecio";
import { prop } from "../../../helpers/prop";
import AppLayout from "../../../layouts/AppLayout";
import { GastosService } from "../../../services/GestionSuministros/gastos.service";
import { v4 as uuidv4 } from "uuid";

export default function NuevoGasto() {
  const [gasto, setGasto] = useState({});
  const navigate = useNavigate();
  const [update, setUpdate] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (id !== "nuevo") {
      new GastosService().getGasto(id).then(async (res) => {
        const response = await res.json();
        if (response.fecha) {
          response.fecha = response.fecha.substring(0, 10);
        }
        setGasto(response);
      });
    }
  }, []);
  const handleGasto = (name, value) => {
    setGasto((prev) => ({ ...prev, [name]: value }));
  };
  const handleProveedor = (proveedor) => {
    if (!proveedor) {
      handleGasto("proveedor", null);
    } else {
      handleGasto("proveedor", proveedor._id);
    }
  };
  const handleSaecio = (saecio) => {
    if (!saecio) {
      handleGasto("saecio", null);
    } else {
      handleGasto("saecio", saecio._id);
    }
  };
  const createGasto = () => {
    console.log(gasto);
    new GastosService().createGasto(gasto).then(() => {
      navigate("/gestion-suministros/gastos");
    });
  };
  const updateGasto = () => {
    new GastosService().updateGasto(id, gasto).then(() => {
      navigate("/gestion-suministros/gastos");
    });
  };
  const handleLinea = (prop, value, id) => {
    const lineas = gasto.lineas.map((linea) => {
      if (linea._id === id) {
        linea[prop] = value;
      }
      return linea;
    });
    setGasto((prev) => {
      return { lineas, ...prev };
    });
  };
  const createLinea = () => {
    if (!gasto.lineas) {
      gasto.lineas = [];
    }
    gasto.lineas.push({
      cantidad: 0,
      precio: 0,
    });
    setUpdate((prev) => !prev);
  };
  const deleteLinea = (id) => {
    gasto.lineas = gasto.lineas.filter((linea) => {
      return linea._id !== id;
    });
    setUpdate((prev) => !prev);
  };
  console.log(gasto);
  return (
    <AppLayout tittle={"Gasto"}>
      <FormContainer>
        <FormControl label={"Número de registro"}>
          <Input value={gasto.numero} readOnly={true} name="numero" />
        </FormControl>
        <FormControl label={"Proveedor"}>
          <SelectProveedor
            value={gasto.proveedor}
            handleProveedor={handleProveedor}
          />
        </FormControl>
        <FormControl label={"Fecha"}>
          <Input
            value={gasto.fecha}
            type="date"
            onChange={handleGasto}
            name="fecha"
          />
        </FormControl>
        <FormControl label={"Pagado por"}>
          <SelectSaecios
            handleSaecio={handleSaecio}
            value={gasto.saecio ? gasto.saecio : ""}
          />
        </FormControl>
        <div className="col-span-4 flex gap-2">
          <Button onClick={id === "nuevo" ? createGasto : updateGasto}>
            {id === "nuevo" ? "Crear" : "Guardar"}
          </Button>
          <Button onClick={createLinea}>Crear Linea</Button>
        </div>
      </FormContainer>
      <section className="flex flex-col space-y-2">
        {/* Cabecera */}
        <div className="rounded-lg bg-blue text-white px-2 py-1 grid grid-flow-col auto-cols-fr">
          <div>Producto</div>
          <div>Cantidad</div>
          <div>Precio</div>
          <div>Total</div>
          <div>Acciones</div>
        </div>
        {/* Filas */}
        <div className="grow space-y-1">
          {/* Fila */}
          {gasto.lineas &&
            gasto.lineas.map((item) => {
              return (
                <div
                  key={item._id}
                  className="bg-white rounded-lg ring-blue  gap-x-2 ring-1 px-2 py-1 grid grid-flow-col auto-cols-fr"
                >
                  <SelectProducto
                    handleProducto={(value) => {
                      handleLinea("producto", value._id, item._id);
                    }}
                    value={item.producto}
                  />
                  <div className="flex items-center">
                    <Input
                      name="cantidad"
                      onChange={(key, value) =>
                        handleLinea(key, value, item._id)
                      }
                      value={prop(item, "cantidad")}
                    />
                  </div>
                  <div className="flex items-center">
                    <Input
                      name="precio"
                      onChange={(key, value) =>
                        handleLinea(key, value, item._id)
                      }
                      value={prop(item, "precio")}
                    />
                  </div>
                  <div className="flex items-center">
                    {item.cantidad * item.precio}
                  </div>
                  <div className="flex items-center justify-end">
                    <img
                      onClick={() => deleteLinea(item._id)}
                      src="/icons/delete.png"
                      className="cursor-pointer"
                      width={20}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </AppLayout>
  );
}
