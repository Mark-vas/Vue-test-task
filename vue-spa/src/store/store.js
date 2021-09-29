import Vue from 'vue';
import Vuex from 'vuex';
import axiosI from '../api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: []
    },
    getters: {
        getCharacters(state) {
            return state.characters
        }
    },
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload
        }
    },
    actions: {
        loadCharacters({ commit }, payload) {
            return axiosI
                .get('https://rickandmortyapi.com/api/character')
                .then(characters => {
                    console.log(characters.data.results)
                    commit('setCharacters', characters.data.results)
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        },
    },
})

export default store;