<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" @submit.prevent="enviado = true" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto
          v-model="usuario.nomeCompleto"
          @change="usuario.nomeCompleto = $event"
        />
        <Rotulo nome="E-mail">
          <input type="email" v-model="usuario.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </Rotulo>
        <Rotulo nome="Armazenar dados?">
          <div>
            <input type="radio" id="sim" checked v-model="usuario.armazenar" value="Sim" />
            <label for="sim">Sim</label>
          </div>
          <div>
            <input type="radio" id="nao" v-model="usuario.armazenar" value="Não" />
            <label for="nao"> Não</label>
          </div>
        </Rotulo>

        <button type="submit">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        
        <div>
          <h2>
            <strong>Nome: </strong>
          </h2>
          <p>{{ usuario.nomeCompleto.nome }} {{ usuario.nomeCompleto.sobrenome }}</p>
        </div>

        <div>
          <h2>
            <strong>E-mail: </strong>
          </h2>
          <p>{{ usuario.email }}</p>
        </div>

        <div>
          <h2>
            <strong>Senha: </strong>
          </h2>
          <p>{{ usuario.senha }}</p>
        </div>

        <div>
          <h2>
            <strong>Armazenar dados: </strong>
          </h2>
          <p>{{ usuario.armazenar }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      enviado: false,
      usuario: {
        nomeCompleto: {}
      },
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
