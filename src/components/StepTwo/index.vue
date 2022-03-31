<template>
  <div class="container">
    <h2>Que tecnologias você conhece?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <TecList />
    </div>
  </div>
  <NavButtons canProgress="true" canReturn="true" />
</template>

<script>
import TecList from "../TecList";
import NavButtons from "../NavButtons";

export default {
  name: "StepTwo",
  components: {
    TecList,
    NavButtons,
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
  /* height: 92vh; */
  height: 100%;
  width: 80%;
  /* font-size: 1.4rem; */
  padding-top: 11vh;
  margin: 0 auto;
  text-align: center;
  /* padding-top: 5%; */
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  background-color: var(--background);
}

.container > h2 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
}

.container > span {
  margin-top: 4px;
  font-size: 0.75rem;
  color: var(--desabled-color);
}

.content {
  min-height: 50%;
  width: 100%;
  margin-top: 3%;
  overflow-y: scroll;
  display: flex;
  /* align-items: flex-start; */
  justify-content: center;
}
</style>