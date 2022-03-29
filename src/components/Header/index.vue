<template>
  <header class="header">
    <img class="logo" :src="logo" alt="Navit" />
    <div class="pipe" />
    <h2>
      <span>Passo {{ getStep }}:</span>
      {{ getStepDescription }}
    </h2>
  </header>
  <ProgressBar />
</template>

<script>
import logo from "../../assets/images/Logo.png";
import ProgressBar from "../ProgressBar";

export default {
  name: "Header",
  data() {
    return {
      logo,
    };
  },
  components: {
    ProgressBar,
  },
  computed: {
    getStepDescription() {
      return this.$store.getters.getStepDescription;
    },
    getStep() {
      return this.$store.getters.getStep;
    },
  },
};
</script>

<style scoped>
.header {
  --background: #ffffff;
  --pipe-color: #cecece;
}

.header {
  height: 7vh;
  width: 100vw;
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: var(--background);
}

.header > h1 {
  font-size: 1.5rem;
  font-weight: 400;
}

.header span {
  font-weight: bold;
}

.pipe {
  height: 80%;
  width: 3px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: var(--pipe-color);
}

.logo {
  height: 50px;
  width: 50px;
}
</style>