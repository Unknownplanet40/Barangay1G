import Vue from "vue";
import Vuex from "vuex";
import * as authService from "./services/auth_services";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        apiURL: "http://127.0.0.1:8000/api",
        serverPath: "http://127.0.0.1:8000",

        // apiURL: "http://192.168.1.33/api",
        // serverPath: "http://192.168.1.33",

        user_profile: {},
    },

    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = authService.isLoggedIn();
            if (state.isLoggedIn) {
                state.user_profile = payload;
            } else {
                state.user_profile = {};
            }
        },
    },
    actions: {
        authenticate(context, payload) {
            context.commit("authenticate", payload);
        },
    },
    plugins: [createPersistedState()],
});
