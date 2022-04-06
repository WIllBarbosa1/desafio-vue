<template>
  <div class="nav-container">
    <button
      :class="canGoPrevius"
      :disabled="isPreviusDisabled"
      @click="previusStep"
    >
      Anterior
    </button>
    <button
      :class="canGoNext"
      :disabled="isNextDisabled"
      @click="$emit('next-button', 'clicou')"
    >
      Próximo
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavButtons",
  props: {
    canProgress: Boolean,
    canReturn: Boolean,
  },
  methods: {
    ...mapActions(["previusStep"]),
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
  width: 334px;
  height: 69px;
  z-index: 1;
  position: fixed;
  bottom: 26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary);
  border: 2px solid var(--gray);
  border-radius: 20px;
  box-shadow: 3px 3px 9px var(--gray);
}

button {
  width: 124px;
  font-size: 0.75rem;
  padding: 12px 35px;
  border: 2px solid var(--gray);
  border-radius: 12px;
  box-shadow: 3px 3px 9px var(--gray);
  background-color: var(--primary);
}

.active-button {
  background-color: var(--secondary);
  color: var(--primary);
}

.desable-button {
  color: var(--gray);
}

.desable-button:hover {
  cursor: not-allowed;
}

button:hover {
  cursor: pointer;
}
</style>