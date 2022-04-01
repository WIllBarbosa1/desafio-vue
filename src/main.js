import { createApp } from 'vue';
import App from './App.vue'
import store from './store';

const app = createApp(App)

//Inport fonts por aqui
app.use(store).mount('#app');