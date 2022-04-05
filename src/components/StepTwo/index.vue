<template>
  <div class="container">
    <h2>Que tecnologias você conhece?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <TecList />
    </div>
  </div>
  <NavButtons canProgress="true" canReturn="true" @next-button="next" />
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
  methods: {
    next() {
      this.$store.commit("nextStep");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  padding-top: 11vh;
  margin: 0 auto;
  text-align: center;
  background-color: var(--primary);
}

.container > h2 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
}

.container > span {
  margin-top: 4px;
  font-size: 0.75rem;
  color: var(--gray);
}

.content {
  min-height: 50%;
  width: 100%;
  margin-top: 3%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
}
</style>