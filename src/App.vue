<template>
  <div class="page-wrapper">
    <Header />
    <main class="page-content">
      <StepOne v-if="getStep === 1" />
      <StepTwo v-else-if="getStep === 2" />
      <StepThree v-else />
    </main>
  </div>
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
  computed: {
    getStep() {
      return this.$store.getters.getStep;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

:root {
  --primary: #ffffff;
  --secondary: #37a1a2;
  --gray: #d7d7d7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
}

*::-webkit-scrollbar {
  background: var(--gray);
  width: 5px;
  border-radius: 20px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 30px;
  background: var(--secondary);
}

.page-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: column;
}

.page-content {
  flex-grow: 1;
}
</style>
