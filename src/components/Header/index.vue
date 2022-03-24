<template>
  <header class="header">
    <h2>Logo</h2>
    <div class="pipe" />
    <h2>
      <span>Passo {{ step }}:</span> {{ stepDescription }}
    </h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    step: String,
    stepDescription: String,
  },
};
</script>

<style scoped>
.header {
  height: 7vh;
  width: 100vw;
  position: sticky;
  top: 0;
  padding: 0 20px;
  color: #0a0a0a;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
}

.header > h1 {
  font-size: 1.5rem;
  font-weight: 400;
}

.header span {
  font-weight: bold;
}

.pipe {
  height: 70%;
  width: 3px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #b8b8b8;
}
</style>