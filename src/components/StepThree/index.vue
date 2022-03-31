<template>
  <div class="container">
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
  /* height: 92vh; */
  height: 100%;
  width: 100%;
  /* font-size: 1.4rem; */
  margin: 0 auto;
  text-align: center;
  padding-top: 11vh;
  /* padding-top: 5%; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: flex-start; */
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

.image {
  height: 100%;
}

.content {
  min-height: 50%;
  /* height: 60%; */
  width: 80%;
  margin: 0 auto;
  margin-top: 3%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-link {
  z-index: 1;
  width: 159px;
  position: fixed;
  /* top: 88%; */
  bottom: 26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background);
  border: 1px solid var(--borders);
  border-radius: 12px;
  box-shadow: 0px 0px 9px 3px var(--shaders);
  background-color: var(--background-button);
}
</style>