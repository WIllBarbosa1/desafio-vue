<template>
  <div class="container">
    <h2>Como conseguiremos falar com você depois?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="modal" v-if="isOpen" @click="closeModal">
      <div class="modal-content">
        <h2>Informações invalidas</h2>
        <div class="modal-errors">
          <span v-for="(item, index) in errors" :key="'errors' + index">{{
            item
          }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <form class="inputs-wrapper" @submit.prevent="checkForm">
        <input
          type="text"
          placeholder="Seu nome"
          class="input-name"
          v-model="name"
        />
        <input type="email" placeholder="Email" v-model="email" />
        <input type="tel" placeholder="Telefone" v-model="tel" />
      </form>
    </div>
  </div>
  <NavButtons :canProgress="completeForm" @next-button="checkForm" />
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
      name: "",
      tel: "",
      email: "",
      isOpen: false,
    };
  },
  methods: {
    checkForm() {
      const onlyNumbers = /^[0-9]*$/;
      const onlyLetters = /^[a-zA-Z\s]*$/g;
      const isEmail = /\S+@\S+\.\S+/;

      this.errors = [];

      if (!this.name || !onlyLetters.test(this.name)) {
        this.errors.push("Nome");
      }
      if (!this.email || !isEmail.test(this.email)) {
        this.errors.push("Email");
      }
      if (!this.tel || this.tel.length < 8 || !onlyNumbers.test(this.tel)) {
        this.errors.push("Telefone");
      }

      if (this.errors.length === 0) {
        this.$store.commit("addUserInformation", {
          name: this.name,
          email: this.email,
          tel: this.tel,
        });
        this.$store.commit("nextStep");
      } else {
        this.isOpen = true;
      }
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  computed: {
    completeForm() {
      return this.name && this.email && this.tel ? true : false;
    },
    hasError() {
      return this.errors.length > 0;
    },
  },
  created() {
    const userInfo = this.$store.getters.getCollaboratorInfo;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.tel = userInfo.tel;
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

.modal {
  z-index: 2;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  width: 30%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
  background-color: var(--primary);
  border: 4px solid var(--secondary);
  border-radius: 15px;
}

.modal-content > h2 {
  font-size: 1.5rem;
}

.modal-errors > span {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
</style>