import { useNavigate } from "react-router-dom";
import { prop } from "../helpers/prop";

const Crud = ({ items, cabecera, atributos, filtro, baseUrl, ...props }) => {
  const router = useNavigate();
  const goTo = (url) => {
    router(`${baseUrl}/${url}`);
  };
  const deleteItem = (e, id) => {
    e.stopPropagation();
    const confirmacion = window.confirm("¡Está usted seguro/a!");
    if (confirmacion) {
      props.handleDelete(id);
    }
  };
  return (
    <section className="flex flex-col space-y-2">
      {/* Cabecera */}
      <div className="rounded-lg bg-blue text-white px-2 py-1 grid grid-flow-col auto-cols-fr">
        {cabecera &&
          cabecera.map((c) => {
            return <div key={c}>{c}</div>;
          })}
          <div>Acciones</div>
      </div>
      {/* Filas */}
      <div className="grow space-y-1">
        {/* Fila */}
        {items &&
          items.map((item) => {
            return (
              <div
                key={item._id}
                onClick={() => goTo(item._id)}
                className="bg-white rounded-lg ring-blue hover:bg-blue hover:text-white ring-1 px-2 py-1 grid grid-flow-col auto-cols-fr"
              >
                {item &&
                  atributos.map((atributo) => {
                    return <div key={atributo}>{prop(item, atributo)}</div>;
                  })}
                <div
                  onClick={(e) => deleteItem(e, item._id)}
                  className="flex items-center justify-end cursor-pointer"
                >
                  <img src="/icons/delete.png" width={20} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Crud;
