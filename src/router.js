import Vue from "vue";
import Router from "vue-router";

const Inicio = () => import("./views/Inicio");
const Busquedas = () => import("./views/Busquedas");
const Ventas = () => import("./views/Ventas");

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
      redirect: "inicio",
    },
    {
      path: "/inicio",
      redirect: "inicio",
    },
    {
      path: "/busquedas",
      name: "Busquedas",
      component: Busquedas,
    },
    {
      path: '/ventas',
      name: 'Ventas',
      component: Ventas
  },
  ],
});
