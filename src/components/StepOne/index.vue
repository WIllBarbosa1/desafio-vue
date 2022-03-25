<template>
  <div class="container">
    <h2>Como conseguiremos falar com você depois?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <form class="inputs-wrapper">
        <input
          type="text"
          placeholder="Seu nome"
          class="input1"
          v-model="name"
        />
        <input type="text" placeholder="Email" class="input2" v-model="email" />
        <input
          type="text"
          placeholder="Telefone"
          class="input3"
          v-model="phone"
        />
      </form>
    </div>
  </div>
  <NavButtons
    :next="nextStep"
    :previus="previusStep"
    :canProgress="completeForm"
  />
</template>

<script>
import NavButtons from "../NavButtons";

export default {
  name: "StepOne",
  components: {
    NavButtons,
  },
  props: {
    nextStep: Function,
    previusStep: Function,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  computed: {
    completeForm() {
      return this.name && this.email && this.phone ? true : false;
    },
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

.inputs-wrapper {
  width: 50%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 19% 4%;
  justify-content: center;
  align-items: center;
}

.inputs-wrapper > input {
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  border: 2px solid var(--borders);
  border-radius: 20px;
  box-shadow: 3px 3px 9px var(--shaders);
  outline: none;
  transition: all 0.6s;
}

.inputs-wrapper > input:focus {
  border: 2px solid var(--active-color);
  box-shadow: 3px 3px 9px var(--active-color);
}

.input1 {
  grid-area: 1 / 1 / 2 / 3;
}

.input2 {
  grid-area: 2 / 1 / 3 / 2;
}

.input3 {
  grid-area: 2 / 2 / 3 / 3;
}
</style>