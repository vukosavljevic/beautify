
import { createStore } from 'vuex';

const store = createStore({
    state: {
        userPass : '',
    },
    mutations : {
        registerUser(state,payload){
            state.userPass = payload;
        }
    },
    actions : {
        registerUser(context,payload){
            context.commit('registerUser',payload);
        }
    },
    getters: {
        loggedStatus(state){
            return state.userPass;
        }
    }
})

export default store;