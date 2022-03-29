import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue'


const store = createStore({
    state() {
        return {
            userInformation: {
                collaborator: {
                    name: '',
                    email: '',
                    tel: '',
                },
                techs: []
            },
            step: 1,
            steps: ["Informações pessoais", "Alinhamento técnico", "Finalizado"],
        }
    },
    mutations: {
        addTech(state, tech) {
            state.techs.push(tech);
        },
        nextStep(state) {
            state.step++;
        },
        previusStep(state) {
            state.step--;
        },
    },
    getters: {
        getStepDescription(state) {
            return state.steps[state.step - 1];
        },
        getStep(state) {
            return state.step;
        },
        getUserInfo(state) {
            return state.userInformation;
        }
    }
});

const app = createApp(App)

app.use(store).mount('#app');