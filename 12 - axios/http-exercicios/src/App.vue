<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert show dismissible v-for="(mensagem, idx) in mensagens" :key="idx" :variant="mensagem.tipo">
      {{ mensagem.texto }}
    </b-alert>
    <b-card>
      <b-form-group label="Nome">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o e-mail"
					@keypress.enter.native="salvar"
        ></b-form-input>
      </b-form-group>
			<b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>
			<b-button @click="obterUsuarios" variant="secondary" size="lg" class="ml-3">Consultar</b-button>
    </b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<div class="d-flex">
					<b-badge variant="secondary" pill class="ml-auto">{{ id }}</b-badge>
				</div>
				<p>
					<strong>Nome: </strong> {{ usuario.nome }}
				</p>
				<p>
					<strong>E-mail: </strong> {{ usuario.email }}
				</p>

        <div class="d-flex justify-content-end">
          <b-button variant="danger" size="lg"
              @click="excluir(id)">Excluir</b-button>
          <b-button variant="warning" size="lg" class="ml-3"
              @click="carregar(id)">Carregar</b-button>
        </div>
			</b-list-group-item>
		</b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      alterar: false,
      usuario: {},
      usuarios: [],
    };
  },
  methods: {
    salvar() {
      const metodo = this.alterar ? "patch" : "post";
      const finalUrl = this.alterar
        ? `usuarios/${this.usuario.id}.json`
        : "usuarios.json";

      this.$http[metodo](finalUrl, this.usuario).then((response) => {
        this.limpar();
        this.obterUsuarios();
        this.mensagens.push({
          texto: "Usuário salvo :)",
          tipo: "success",
        });
      });
    },
    excluir(id) {
      this.$http.delete(`usuarios/${id}.json`)
        .then(() => this.obterUsuarios())
        .catch(error => {
          this.mensagens.push({
            texto: 'Ocorreu um erro ao excluir',
            tipo: 'danger'
          })
          console.log(error);
        });
    },
    carregar(id) {
      this.usuario = { ...this.usuarios[id], id };
      this.alterar = true;
    },
    obterUsuarios() {
      // this.$http.get() também funciona
      this.$http("usuarios.json").then((response) => {
        this.usuarios = response.data;
      });
    },
    limpar() {
      this.usuario = {};
      this.alterar = false;
      this.mensagens = [];
    },
  },
  created() {
    this.obterUsuarios();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
