<template>
  <div class="container">
    <h2>Como conseguiremos falar com você depois?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <!-- <h3>Erros: {{ this.errors }}</h3> -->
    <div class="content">
      <form class="inputs-wrapper" @submit.prevent="checkForm">
        <input
          type="text"
          placeholder="Seu nome"
          class="input-name"
          v-model="this.$store.state.userInformation.collaborator.name"
        />
        <input
          type="email"
          placeholder="Email"
          v-model="this.$store.state.userInformation.collaborator.email"
        />
        <input
          type="tel"
          placeholder="Telefone"
          v-model="this.$store.state.userInformation.collaborator.tel"
        />
        <!-- <input type="submit" /> -->
      </form>
    </div>
  </div>
  <NavButtons :canProgress="completeForm" @click-button="teste" />
</template>

<script>
import NavButtons from "../NavButtons";

export default {
  name: "StepOne",
  components: {
    NavButtons,
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    teste() {},
    checkForm() {
      console.log("teste");
      this.errors = [];

      if (
        this.$store.state.userInformation.collaborator.name &&
        this.$store.state.userInformation.collaborator.email &&
        this.$store.state.userInformation.collaborator.tel
      ) {
        return true;
      }

      if (!this.$store.state.userInformation.collaborator.name) {
        this.errors.push("Nome invalido!");
      }
      if (!this.$store.state.userInformation.collaborator.email) {
        this.errors.push("Email invalido!");
      }
      if (!this.$store.state.userInformation.collaborator.tel) {
        this.errors.push("Tel invalido!");
      }
    },
  },
  computed: {
    completeForm() {
      // let regPhone = new RegExp("^[0-9]*$");

      // let isOnlyNumbers =
      //   regPhone.test(this.$store.state.userInformation.collaborator.tel) &&
      //   this.$store.state.userInformation.collaborator.tel.length >= 8;

      return this.$store.state.userInformation.collaborator.name &&
        this.$store.state.userInformation.collaborator.email &&
        this.$store.state.userInformation.collaborator.tel
        ? true
        : false;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding-top: 11vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
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
  align-items: flex-start;
  justify-content: center;
}

.inputs-wrapper {
  width: 380px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 19% 4%;
  justify-content: center;
  align-items: center;
}

.inputs-wrapper :first-child {
  grid-area: 1 / 1 / 2 / 3;
}

.inputs-wrapper > input {
  font-size: 0.75rem;
  text-align: center;
  padding: 12px 0;
  border: 2px solid var(--gray);
  border-radius: 12px;
  box-shadow: 0px 2px 9px var(--gray);
  outline: none;
  transition: all 0.6s;
}

.inputs-wrapper > input:focus {
  border: 2px solid var(--secondary);
  box-shadow: 0px 2px 9px var(--secondary);
}
</style>