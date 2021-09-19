import Vue from "vue";
import Router from "vue-router";

const Inicio = () => import("./views/Inicio");
const Busquedas = () => import("./views/Busquedas");
const Ventas = () => import("./views/Ventas");
const Total = () => import("./views/Total");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "",
      redirect: "Inicio",
    },
    {
      path: "/inicio",
      redirect: "Inicio",
    },
    {
      path: "/busquedas",
      name: "Busquedas",
      component: Busquedas,
    },
    {
      path: "/ventas",
      name: "Ventas",
      component: Ventas,
    },
    {
      path: "/total",
      name: "Total",
      component: Total,
    },
  ],
});
