<template>
  <div class="container">
    <h2>Que tecnologias você conhece?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <TecList />
    </div>
  </div>
  <NavButtons
    :next="nextStep"
    :previus="previusStep"
    canProgress="true"
    canReturn="true"
  />
</template>

<script>
import TecList from "../TecList";
import NavButtons from "../NavButtons";

export default {
  name: "StepTwo",
  data() {
    return {};
  },
  components: {
    TecList,
    NavButtons,
  },
  props: {
    nextStep: Function,
    previusStep: Function,
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
  height: 92vh;
  width: 100%;
  font-size: 1.4rem;
  padding-top: 5%;
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
</style>