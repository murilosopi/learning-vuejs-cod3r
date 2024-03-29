import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
// import Usuario from "./components/usuario/Usuario";
import Menu from "./components/Menu";
import MenuAlt from "./components/MenuAlt";
// import UsuarioLista from "./components/usuario/UsuarioLista";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";

Vue.use(Router);

const Usuario = () => import(/* webpackChunkName: "usuario" */"./components/usuario/Usuario");
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioLista");
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioEditar");
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioDetalhe");

const router = new Router({
  routes: [
    {
      name: "inicio",
      path: "/",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: "/usuario",
      components: {
        default: Usuario,
        menu: Menu,
        menuInferior: MenuAlt,
      },
      props: true,

      // se o path tivesse um "/" no início seria equivalente ao "localhost:80/"
      children: [
        { path: "", component: UsuarioLista },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("antes da rota (router)");
            next();
          },
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "/redirecionar",
      redirect: "/usuario",
    },
    {
      path: "/*",
      redirect: "/",
    },
  ],
  mode: "history", // hash ou history (necessita de configurações no Web Server utilizado)
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    // return {x: 0, y:1000};
  },
});

router.beforeEach((to, from, next) => {
  console.log("antes das rotas (global)");

  // sem o next ele não carrega o componente
  // if(to.path !== '/usuario') {
  //   next('/usuario');
  // } else {
  //   next(false);
  // }
  next();
});

export default router;
