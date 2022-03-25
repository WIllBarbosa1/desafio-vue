<template>
  <div class="container">
    <h2>Que tecnologias você conhece?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <TecList />
    </div>
  </div>
</template>

<script>
import TecList from "../TecList";

export default {
  name: "StepTwo",
  data() {
    return {};
  },
  components: {
    TecList,
  },
};
</script>

<style scoped>
.container {
  --active-color: #37a1a2;
  --desabled-color: #d7d7d7;
  --background: #ffffff;
  --scrollbar-color: #37a2a1;
  --scrollbar-background-color: #ebebeb;
  --shaders: #d7d7d7;
  --borders: #d7d7d7;
}

.container {
  height: 91.5vh;
  width: 100%;
  font-size: 1.4rem;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--background);
}

.container > span {
  color: var(--desabled-color);
}

.content {
  min-height: 50%;
  width: 80%;
  margin-top: 3%;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.content::-webkit-scrollbar {
  background: var(--scrollbar-background-color);
  width: 0.5vw;
  border-radius: 20px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--scrollbar-color);
}
</style>