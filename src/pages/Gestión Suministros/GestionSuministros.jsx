import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AppLayout from "../../layouts/AppLayout";

const Item = ({ text, url }) => {
  const router = useNavigate();
  const goTo = (url) => {
    router(`/gestion-suministros/${url}`);
  };
  return (
    <button
      onClick={() => goTo(url)}
      className="bg-blue p-2 rounded-md text-white"
    >
      {text}
    </button>
  );
};
const Card = ({ text, children }) => {
  return (
    <div className="bg-white rounded-md p-2 shadow-md">
      <span className="text-sm text-blue">{text}</span>
      <div className="space-x-1">{children}</div>
    </div>
  );
};
const GestionSuministros = () => {
  return (
    <AppLayout tittle={"Gestión de Suministros"}>
      <div className="grid grid-cols-3 gap-2">
        <Card text="Pagos">
          <Item text="Nuevo" url="pagos/nuevo" />
          <Item text="Consultar" url="pagos" />
          <Item text="Métodos de pago" url="metodos-pago" />
        </Card>
        <Card text="Gastos">
          <Item text="Nuevo" url="gastos/nuevo" />
          <Item text="Consultar" url="gastos" />
        </Card>
        <Card text="Productos">
          <Item text="Nuevo" url="productos/nuevo" />
          <Item text="Consultar" url="productos" />
          <Item text="Nuevo Grupo" url="productos/grupos/nuevo" />
          <Item text="Consultar Grupos" url="productos/grupos" />
        </Card>
        <Card text="Informes"></Card>
        <Card text="Tarifas">
          <Item text="Consultar Tarifas" url="tarifas" />
        </Card>
        <Card text="Proveedores">
          <Item text="Nuevo Proveedor" url="gastos/proveedores/nuevo" />
          <Item text="Consultar Proveedores" url="gastos/proveedores" />
        </Card>
      </div>
    </AppLayout>
  );
};

export default GestionSuministros;
