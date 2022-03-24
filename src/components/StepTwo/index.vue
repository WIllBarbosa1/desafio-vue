<template>
  <div class="container">
    <div class="content">
      <h2>Que tecnologias você conhece?</h2>
      <ul class="list">
        <li :class="{ active: isActive }" @click="switchCss()" key="1">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <span v-if="isActive">Ativo</span>
        </li>
        <li key="2">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="JavaScript"
          />
        </li>
        <li key="3">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
            alt="JavaScript"
          />
        </li>
        <li key="4">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="JavaScript"
          />
        </li>
        <li key="5">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="JavaScript"
          />
        </li>
        <li key="6">
          <img
            class="logo"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
            alt="JavaScript"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwo",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    switchCss() {
      this.isActive = !this.isActive;
      //   alert("Teste");
    },
  },
};
</script>

<style scoped>
.container {
  height: 91.5vh;
  width: 100%;
  padding: 20px;
  background-color: #8b8b8b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.content {
  width: 60%;
  height: 90%;
  padding: 20px;
  background-color: #b1b1b1;
}

.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  padding: 5% 0;
}

.list li {
  width: 30%;
  margin: 20px 0;
  padding: 10px;
  text-align: left;
  background-color: #8b8b8b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #8b8b8b;
}

li:hover {
  cursor: pointer;
}

.logo {
  width: 30%;
}

li.active {
  border: 3px solid chartreuse;
}
</style>