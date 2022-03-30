<template>
  <div class="container">
    <!-- <div>Informações: {{ this.$store.getters.getUserInfo }}</div> -->
    <h2>Parabéns! Todas as informações foram enviadas para nosso time!</h2>
    <span>Agora você esta pronto para a próxima etapa, sucesso!</span>
    <div class="content">
      <img class="image" :src="finish" alt="feito" />
    </div>
    <h2>Esteja preparado para os próximos desafios.</h2>
    <span
      >Você pode acessar nosso contéudo exclusivo para novos integrantes
      clicando no botão abaico!</span
    >
    <a
      class="material-link"
      href="https://www.instagram.com/navitdigital/"
      target="_blank"
      >Acessar material!</a
    >
  </div>
</template>

<script>
import finish from "../../assets/images/Finish.png";

export default {
  name: "StepThree",
  data() {
    return {
      finish,
    };
  },
  created() {
    console.log("User info: ", this.$store.getters.getUserInfo);
  },
};
</script>

<style scoped>
.container {
  --desabled-color: #d7d7d7;
  --background: #ffffff;
  --background-button: #37a2a1;
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

.image {
  height: 100%;
}

.content {
  min-height: 50%;
  height: 60%;
  width: 80%;
  margin-top: 3%;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.material-link {
  text-decoration: none;
  width: 20%;
  position: fixed;
  top: 88%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-button);
  color: var(--background);
}

a {
  width: 40%;
  color: var(--desabled-color);
  font-size: 1.5rem;
  padding: 20px;
  border: 2px solid var(--borders);
  border-radius: 20px;
  box-shadow: 3px 3px 9px var(--shaders);
}
</style>