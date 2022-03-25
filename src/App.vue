<template>
  <Header :step="step" :stepDescription="steps[step - 1]" />
  <main>
    <StepOne
      v-if="step === 1"
      :nextStep="nextStep"
      :previusStep="previusStep"
    />
    <StepTwo
      v-else-if="step === 2"
      :nextStep="nextStep"
      :previusStep="previusStep"
    />
    <StepThree v-else />
  </main>
</template>

<script>
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

export default {
  name: "App",
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
  },
  methods: {
    nextStep() {
      this.step++;
    },
    previusStep() {
      this.step--;
    },
  },
  data() {
    return {
      steps: ["Informações pessoais", "Alinhamento técnico", "Finalizado"],
      step: 1,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content::-webkit-scrollbar {
  background: var(--scrollbar-background-color);
  width: 0.5vw;
  border-radius: 20px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--scrollbar-color);
}
</style>
