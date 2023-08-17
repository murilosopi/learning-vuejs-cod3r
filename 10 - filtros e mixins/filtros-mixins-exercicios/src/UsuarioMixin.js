export default {
  data() {
    return {
      usuarioLogado: {
        id: 5,
        acesso: "padrao",
        nome: "@murilosopi",
      },
    };
  },
  methods: {
    validarUsuario() {
      if (this.usuarioLogado.acesso == "adm")
        window.alert(`Seja bem vindo, ${this.usuarioLogado.nome}`);
      else {
        window.alert("ACESSO NEGADO");
        window.location.reload();
      }
    },
  },
  created() {
		console.log('Created - UsuarioMixin');
	}
};
