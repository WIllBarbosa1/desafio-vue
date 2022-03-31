<template>
  <header class="header">
    <img class="logo" :src="logo" alt="Navit" />
    <div class="pipe" />
    <h1>
      <span>Passo {{ getStep }}: </span>
      {{ getStepDescription }}
    </h1>
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
  /* height: 12.8vh; */
  height: 64px;
  width: 100vw;
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: var(--background);
}

.header > h1 {
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
}

.header span {
  font-weight: 700;
}

.pipe {
  height: 37px;
  width: 0;
  margin: 0 14px;
  border: 1px solid var(--pipe-color);
}

.logo {
  height: 32px;
  width: 32px;
}
</style>