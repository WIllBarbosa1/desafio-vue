<template>
  <header class="header">
    <img class="logo" :src="logo" alt="Navit" />
    <div class="pipe" />
    <h1>
      <span>Passo {{ computedStep }}: </span>{{ computedStepDescription }}
    </h1>
  </header>
  <progress class="progress" :value="computedProgress" max="100" />
</template>

<script>
import { mapGetters } from "vuex";
import logo from "../../assets/images/Logo.png";

export default {
  name: "Header",
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapGetters(["getStepDescription", "getProgress", "getStep"]),

    computedStepDescription() {
      return this.getStepDescription;
    },
    computedStep() {
      return this.getStep;
    },
    computedProgress() {
      return Math.ceil(this.getStep * 33.3);
    },
  },
};
</script>

<style scoped>
.header {
  height: 64px;
  width: 100vw;
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: var(--primary);
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
  border: 1px solid var(--gray);
}

.logo {
  height: 32px;
  width: 32px;
}

.progress {
  -webkit-appearance: none;
  appearance: none;
  height: 7px;
  width: 100%;
}

.progress::-webkit-progress-bar {
  border-radius: 10px;
  background-color: var(--gray);
}

.progress::-webkit-progress-value {
  border-radius: 10px;
  background-color: var(--secondary);
}

.progress::-webkit-progress-value {
  transition: width 1s;
}
</style>