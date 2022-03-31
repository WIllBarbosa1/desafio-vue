<template>
  <div class="nav-container">
    <button
      :class="canGoPrevius"
      :disabled="isPreviusDisabled"
      @click="this.$store.commit('previusStep')"
    >
      Anterior
    </button>
    <button
      :class="canGoNext"
      :disabled="isNextDisabled"
      @click="this.$store.commit('nextStep')"
    >
      <!-- @click="$emit('click-Button', 'clicou')" -->
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: "NavButtons",
  props: {
    canProgress: Boolean,
    canReturn: Boolean,
  },
  computed: {
    canGoNext() {
      return this.canProgress ? "active-button" : "desable-button";
    },
    canGoPrevius() {
      return this.canReturn ? "active-button" : "desable-button";
    },
    isNextDisabled() {
      return this.canProgress ? false : true;
    },
    isPreviusDisabled() {
      return this.canReturn ? false : true;
    },
  },
};
</script>

<style scoped>
.nav-container {
  --background: #ffffff;
  --background-button: #ffffff;
  --background-active-button: #37a2a1;
  --background-active-color: #ffffff;
  --shaders: #d7d7d7;
  --borders: #d7d7d7;
  --desabled-color: #d7d7d7;
}

.nav-container {
  /* width: 40%; */
  width: 334px;
  /* height: 15%; */
  height: 69px;
  z-index: 1;
  position: fixed;
  /* top: 80%; */
  bottom: 26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  /* padding: 15px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--background);
  border: 2px solid var(--borders);
  border-radius: 20px;
  box-shadow: 3px 3px 9px var(--shaders);
}

button {
  width: 124px;
  font-size: 0.75rem;
  padding: 12px 35px;
  border: 2px solid var(--borders);
  border-radius: 12px;
  box-shadow: 3px 3px 9px var(--shaders);
  background-color: var(--background-button);
}

.active-button {
  background-color: var(--background-active-button);
  color: var(--background-active-color);
}

.desable-button {
  color: var(--desabled-color);
}

.desable-button:hover {
  cursor: not-allowed;
}

button:hover {
  cursor: pointer;
}
</style>