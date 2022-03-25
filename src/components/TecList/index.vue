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
import mockList from "../../assets/mocks/tecList";

export default {
  name: "TecList",
  data() {
    return {
      list: mockList,
    };
  },
  methods: {
    switchCss(index) {
      this.list[index].isActive = !this.list[index].isActive;
    },
  },
};
</script>

<style scoped>
.list {
  --active-color: #37a1a2;
  --desabled-color: #d7d7d7;
  --background: #ffffff;
  --borders: #d7d7d7;
}

.list {
  height: 100%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
}

.list > li {
  max-height: 100%;
  width: 30%;
  padding: 5px 10px;
  text-align: left;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid var(--borders);
  border-radius: 20px;
}

li:hover {
  cursor: pointer;
}

li.active {
  border: 3px solid var(--active-color);
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
  font-size: 1rem;
  color: var(--desabled-color);
}

.checked {
  margin-left: auto;
  color: var(--active-color);
}
</style>