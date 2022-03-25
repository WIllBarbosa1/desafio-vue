<template>
  <ul class="list">
    <li
      v-for="(item, index) in list"
      :key="index + 'tec-list'"
      :class="item.isActive ? 'active' : 'desabled'"
      @click="switchCss(index)"
    >
      <img class="logo" :src="item.icon" :alt="item.name" />
      <div class="info-wrapper">
        <h3>{{ item.name }}</h3>
        <span>{{ item.description }}</span>
      </div>
      <i v-if="item.isActive" class="fas fa-check checked"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TecList",
  data() {
    return {
      list: [
        {
          name: "java",
          description: "linguagem de programação",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
          isActive: false,
        },
        {
          name: "python",
          description: "linguagem de programação",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
          isActive: false,
        },
        {
          name: "javascript",
          description: "linguagem de programação",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          isActive: false,
        },
        {
          name: "typescript",
          description: "linguagem de programação",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          isActive: false,
        },
        {
          name: "Ruby",
          description: "linguagem de programação",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
          isActive: false,
        },
        {
          name: "nodejs",
          description: "backend",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
          isActive: false,
        },
        {
          name: "go",
          description: "backend",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
          isActive: false,
        },
        {
          name: "vuejs",
          description: "framework frontend",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
          isActive: false,
        },
        {
          name: "reactjs",
          description: "biblioteca frontend",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    switchCss(index) {
      this.list[index].isActive = !this.list[index].isActive;
    },
  },
};
</script>

<style>
.list {
  height: 100%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  margin-bottom: 200px;
}

.list > li {
  max-height: 100%;
  width: 30%;
  padding: 10px 15px;
  text-align: left;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid #b8b8b8;
  border-radius: 20px;
}

li:hover {
  cursor: pointer;
}

li.active {
  border: 3px solid #31969c;
}

.logo {
  width: 20%;
}

.info-wrapper {
  margin-left: 10px;
  font-size: 1.2rem;
  text-transform: capitalize;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.info-wrapper > span {
  color: #8f8f8f;
}

.checked {
  margin-left: auto;
  color: #31969c;
}
</style>