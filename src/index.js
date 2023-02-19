import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Saecios from "./pages/Saecios/Saecios";
import NuevoSaecio from "./pages/Saecios/NuevoSaecio";
import GestionSuministros from "./pages/Gestión Suministros/GestionSuministros";
import Productos from "./pages/Gestión Suministros/Productos/Productos";
import MetodosPago from "./pages/Gestión Suministros/Pagos/MetodosPago";
import NuevoProducto from "./pages/Gestión Suministros/Productos/NuevoProducto";
import Pagos from "./pages/Gestión Suministros/Pagos/Pagos";
import NuevoPago from "./pages/Gestión Suministros/Pagos/NuevoPago";
import GruposProductos from "./pages/Gestión Suministros/Productos/Grupos";
import NuevoGrupo from "./pages/Gestión Suministros/Productos/NuevoGrupo";
import { Tarifas } from "./pages/Gestión Suministros/Tarifas/Tarifas";
import Gastos from "./pages/Gestión Suministros/Gastos/Gastos";
import NuevoGasto from "./pages/Gestión Suministros/Gastos/NuevoGasto";
import Proveedores from "./pages/Gestión Suministros/Gastos/Proveedores";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/saecios", element: <Saecios /> },
  { path: "/saecios/:id", element: <NuevoSaecio /> },
  { path: "/gestion-suministros", element: <GestionSuministros /> },
  { path: "/gestion-suministros/productos", element: <Productos /> },
  {
    path: "/gestion-suministros/productos/grupos",
    element: <GruposProductos />,
  },
  {
    path: "/gestion-suministros/productos/grupos/:id",
    element: <NuevoGrupo />,
  },
  { path: "/gestion-suministros/metodos-pago", element: <MetodosPago /> },
  { path: "/gestion-suministros/productos/:id", element: <NuevoProducto /> },
  { path: "/gestion-suministros/pagos", element: <Pagos /> },
  { path: "/gestion-suministros/gastos", element: <Gastos /> },
  { path: "/gestion-suministros/gastos/proveedores", element: <Proveedores /> },
  { path: "/gestion-suministros/gastos/:id", element: <NuevoGasto /> },
  { path: "/gestion-suministros/pagos/:id", element: <NuevoPago /> },
  { path: "/gestion-suministros/tarifas", element: <Tarifas /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
