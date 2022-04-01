<template>
  <div class="bar">
    <!-- tag progress -->
    <div :class="getPercent"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  computed: {
    getPercent() {
      if (this.$store.getters.getStep === 1) {
        return "progress stepUm";
      } else if (this.$store.getters.getStep === 2) {
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
  height: 7px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--gray);
}

.progress {
  height: 100%;
  border-radius: 5px;
  background-color: var(--secondary);
}

.stepUm {
  width: 33%;
}

.stepDois {
  width: 66%;
}

.stepTres {
  width: 100%;
}
</style>