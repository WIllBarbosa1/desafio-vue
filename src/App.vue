<template>
  <Header :step="step" :stepDescription="steps[step - 1]" />
  <ProgressBar :percent="step * 33" />
  <main>
    <StepOne v-if="step === 1" />
    <StepTwo v-else-if="step === 2" />
    <StepThree v-else />
    <NavButtons v-if="step <= 2" :next="nextStep" :previus="previusStep" />
  </main>
</template>

<script>
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import NavButtons from "./components/NavButtons";

export default {
  name: "App",
  components: {
    Header,
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree,
    NavButtons,
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
</style>
