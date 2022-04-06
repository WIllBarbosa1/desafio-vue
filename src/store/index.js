import { createStore } from 'vuex';

export default createStore({
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
    getters: {
        getStepDescription(state) {
            return state.steps[state.step - 1];
        },
        getStep(state) {
            return state.step;
        },
        getUserInfo(state) {
            return state.userInformation;
        },
        getCollaboratorInfo(state) {
            return state.userInformation.collaborator;
        },
        getTechs(state) {
            return state.userInformation.techs;
        }
    },
    mutations: {
        previusStep(state) {
            state.step--;
        },
        nextStep(state) {
            state.step++;
        },
        addUserInformation(state, payload) {
            state.userInformation.collaborator.name = payload.name;
            state.userInformation.collaborator.email = payload.email;
            state.userInformation.collaborator.tel = payload.tel;
        },
        updateTech(state, payload) {
            state.userInformation.techs = payload;
        },
    },
    actions: {
        previusStep({ commit }) {
            commit('previusStep');
        },
        nextStep({ commit }) {
            commit('nextStep');
        },
        addUserInformation({ commit }, information) {
            commit('addUserInformation', information);
        },
        updateTech({ commit }, information) {
            commit('updateTech', information);
        },
    }
});