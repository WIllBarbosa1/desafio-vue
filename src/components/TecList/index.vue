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
import { mapActions, mapGetters } from "vuex";
import mockList from "../../assets/mocks/tecList";

export default {
  name: "TecList",
  data() {
    return {
      list: mockList,
    };
  },
  methods: {
    ...mapActions(["updateTech"]),
    ...mapGetters(["getTechs"]),

    switchCss(index) {
      let techList = this.getTechs();
      let indexOfElement = techList.findIndex((element) => {
        return element.name === this.list[index].name;
      });

      this.list[index].isActive = !this.list[index].isActive;

      if (indexOfElement < 0) {
        techList.push({ name: this.list[index].name });
      } else {
        techList.splice(indexOfElement, 1);
      }

      this.updateTech(techList);
    },
  },
};
</script>

<style scoped>
.list {
  height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.list > li {
  width: 30%;
  height: 70px;
  padding: 15px;
  margin: 10px;
  text-align: left;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid var(--gray);
  border-radius: 12px;
}

li:hover {
  cursor: pointer;
}

li.active {
  border: 1px solid var(--secondary);
}

.logo {
  height: 40px;
  width: 35px;
}

.info-wrapper {
  margin-left: 10px;
  font-size: 1rem;
  text-transform: capitalize;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.info-wrapper > span {
  font-size: 0.75rem;
  color: var(--gray);
}

.checked {
  margin-left: auto;
  color: var(--secondary);
}
</style>