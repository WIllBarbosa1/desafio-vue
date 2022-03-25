import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue'


const store = createStore({
    state() {
        return {
            name: '',
            collaborator: {
                name: '',
                email: '',
                tel: '',
            },
            techs: []

        }
    },
    mutations: {
        addTech(state, tech) {
            state.techs.push(tech);
        },
        increment(state) {
            state.count++;
        }
    },
});

const app = createApp(App)

app.use(store).mount('#app');