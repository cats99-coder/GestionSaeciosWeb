import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const ToolbarCrud = ({ url, filtro, handleFiltro, textoBtnNuevo = "" }) => {
  const router = useNavigate();
  const goTo = (url) => {
    router(url);
  };
  return (
    <div className="flex justify-end space-x-2">
      <div className="w-52">
        <Button onClick={() => goTo(url)}>{textoBtnNuevo}</Button>
      </div>
      <Input value={filtro} onChange={handleFiltro} />
    </div>
  );
};

export default ToolbarCrud;
