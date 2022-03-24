<template>
  <div class="buttons-navigation">
    <button class="desable-button" @click="previusStep">Anterior</button>
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

<style>
.buttons-navigation {
  width: 40%;
  height: 15%;
  position: fixed;
  top: 70%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border: 2px solid #b8b8b8;
  border-radius: 20px;
  box-shadow: 3px 3px 9px #b8b8b8;
}

button {
  width: 40%;
  color: #b8b8b8;
  font-size: 1.5rem;
  padding: 20px;
  border: 2px solid #b8b8b8;
  border-radius: 20px;
  box-shadow: 3px 3px 9px #b8b8b8;
}

.active-button {
  background-color: #31969c;
  color: #fff;
}

.desable-button:hover {
  cursor: not-allowed;
}

button:hover {
  cursor: pointer;
}
</style>