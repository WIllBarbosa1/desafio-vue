<template>
  <div class="bar">
    <div :class="getPercent"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percent: Number,
  },
  computed: {
    getPercent() {
      if (this.percent <= 33) {
        return "progress stepUm";
      } else if (this.percent <= 66) {
        return "progress stepDois";
      } else {
        return "progress stepTres";
      }
    },
  },
};
</script>

<style>
:root {
  --percent: 33%;
}

.bar {
  height: 1.5vh;
  width: 100%;
  border-radius: 10px;
  background-color: #b8b8b8;
}

.progress {
  height: 100%;
  /* width: var(--percent); */
  border-radius: 5px;
  background-color: #31969c;
}

.stepUm {
  width: 33%;
  --percent: 66%;
}

.stepDois {
  width: 66%;
}

.stepTres {
  width: 100%;
}
</style>