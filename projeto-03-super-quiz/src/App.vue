<template>
  <div id="app">
    <h1>Super Quiz</h1>
		<div class="container">
			<transition name="flip" mode="out-in">
				<Question v-if="showQuestion" :question="questions[currentQuestion]" @answer="result" />
				<Result v-else :correct="rightAnswer" @nextQuestion="nextQuestion"/>
			</transition>
		</div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";
import questions from "@/util/questions.js";

export default {
  components: { Question, Result },
  data() {
    return {
      questions,
      currentQuestion: 0,
			showQuestion: true,
    };
  },
  methods: {
		result(correct) {
			this.showQuestion = false;
			this.rightAnswer = correct;
		},
		nextQuestion() {
			let r = Math.random() * this.questions.length;
			this.currentQuestion = parseInt(r);
			
			this.showQuestion = true;
		}
	}
};
</script>

<style>
body {
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
  font-family: "Oswald", sans-serif;
  color: #fff;
  height: 100vh;

}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: stretch;
	height: 100%;
}

#app .container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 65%;
}

#app h1 {
  font-weight: 200;
  font-size: 4rem;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
