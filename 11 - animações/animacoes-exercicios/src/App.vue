<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mostrar Mensagem</b-button
    >

    <!-- type: vai definir qual é a propriedade que vai mandar no tempo para retirada da DOM -->
    <!-- appear: inicia a animação no carregamento do componente -->
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <!-- classes personalizadas -->
    <transition
      enter-active-class="animated bounce"
      leave-to-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <hr />

    <b-select v-model="tipoAnimacao">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="aviso">{{ msg }}</b-alert>
    </transition>

    <hr />

    <!-- Animações em JS: hooks -->
    <b-button variant="dark" @click="exibir2 = !exibir2">Mostrar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr />

    <div class="mb-4">
			<b-button variant="info" @click="componenteSelecionado = 'AlertaInfo'" class="mr-1"
				>Informação</b-button
			>
			<b-button
				variant="warning"
				@click="componenteSelecionado = 'AlertaAdvertencia'"
				>Advertência</b-button
			>
		</div>


		<transition name="slide" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";
export default {
  /* eslint-disable */

  components: {
    AlertaAdvertencia,AlertaInfo
  },

  data() {
    return {
      msg: "Uma mensagem de informação para o usuário!",
      tipoAnimacao: "fade",
      exibir: false,
      exibir2: true,
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    beforeEnter(el) {
      this.larguraBase = 0;
    },

    enter(el, done) {
      this.animar(el, done, false);
    },

    afterEnter(el) {
      console.log("afterEnter");
    },

    enterCancelled(el) {
      console.log("enterCancelled");
    },

    beforeLeave(el) {
      this.larguraBase = 300;
    },

    leave(el, done) {
      this.animar(el, done, true);
    },

    afterLeave(el) {
      console.log("afterLeave");
    },

    leaveCancelled(el) {
      console.log("leaveCancelled");
    },

    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 20;
        el.style.width = `${novaLargura}px`;

        negativo ? rodada-- : rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 50);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease;
  transition: opacity 0.7s;
}

.slide-leave-active {
  animation: slide-out 1s ease;
  transition: opacity 0.7s;
}
</style>
