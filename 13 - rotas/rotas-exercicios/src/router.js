import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioEditar from "./components/usuario/UsuarioEditar";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/usuario",
      component: Usuario,
      props: true,

      // se o path tivesse um "/" no início seria equivalente ao "localhost:80/"
      children: [
        {path: '', component: UsuarioLista},
        {path: ':id', component: UsuarioDetalhe, props: true},
        {path: ':id/editar', component: UsuarioEditar, props: true}
      ],
    },
  ],
  mode: "history", // hash ou history (necessita de configurações no Web Server utilizado)
});
