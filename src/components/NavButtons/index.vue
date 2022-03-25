<template>
  <div class="container">
    <button class="desable-button" @click="previusStep" disabled>
      Anterior
    </button>
    <button class="active-button" @click="nextStep">Próximo</button>
  </div>
</template>

<script>
export default {
  name: "NavButtons",
  props: {
    next: Function,
    previus: Function,
  },
  methods: {
    nextStep() {
      if (this.next) {
        this.next();
      }
    },
    previusStep() {
      if (this.previus) {
        this.previus();
      }
    },
  },
};
</script>

<style scoped>
.container {
  --background: #ffffff;
  --background-button: #ffffff;
  --background-active-button: #37a2a1;
  --background-active-color: #ffffff;
  --shaders: #d7d7d7;
  --borders: #d7d7d7;
  --desabled-color: #d7d7d7;
}

.container {
  width: 40%;
  height: 15%;
  position: fixed;
  top: 80%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--background);
  border: 2px solid var(--borders);
  border-radius: 20px;
  box-shadow: 3px 3px 9px var(--shaders);
}

button {
  width: 40%;
  font-size: 1.5rem;
  padding: 20px;
  border: 2px solid var(--borders);
  border-radius: 20px;
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