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
  height: 91.5vh;
  width: 100%;
  font-size: 1.4rem;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #0a0a0a;
  background-color: #e0e0e0;
}

.container > span {
  color: #8f8f8f;
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
  background: #b8b8b8;
  width: 0.5vw;
  border-radius: 20px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #31969c;
}
</style>