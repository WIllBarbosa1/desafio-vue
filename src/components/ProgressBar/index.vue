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

<style scoped>
.bar {
  --background-progress-bar-color: #ebebeb;
  --progress-bar-color: #37a2a1;
}

.bar {
  height: 1vh;
  width: 100%;
  border-radius: 10px;
  background-color: var(--background-progress-bar-color);
}

.progress {
  height: 100%;
  border-radius: 5px;
  background-color: var(--progress-bar-color);
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