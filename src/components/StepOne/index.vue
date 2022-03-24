<template>
  <div class="container">
    <h2>Como conseguiremos falar com você depois?</h2>
    <span>Insira abaixo suas informações pessoais de contato</span>
    <div class="content">
      <div class="inputs-wrapper">
        <input type="text" placeholder="Seu nome" class="input1" />
        <input type="text" placeholder="Email" class="input2" />
        <input type="text" placeholder="Telefone" class="input3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
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
  color: #b8b8b8;
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

.inputs-wrapper {
  width: 50%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 19% 4%;
  align-items: center;
}

.inputs-wrapper > input {
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  border: 2px solid #b8b8b8;
  border-radius: 20px;
  box-shadow: 3px 3px 9px #b8b8b8;
  outline: none;
  transition: all 0.6s;
}

.inputs-wrapper > input:focus {
  border: 2px solid #31969c;
  box-shadow: 3px 3px 9px #31969c;
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