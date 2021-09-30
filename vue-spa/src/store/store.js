import Vue from 'vue';
import Vuex from 'vuex';
import axiosI from '../api/index'
import { CHARACTERS_PAGE } from '../api/route'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: []
    },
    getters: {
        getCharacters(state) {

            return state.characters.map(item => {
                let episodethree = item.episode.slice(0, 3)
                let stateItem = item
                stateItem.episode = episodethree
                return stateItem
            })
        },
    },
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload
        }
    },
    actions: {
        loadCharacters({ commit }, page) {
            return axiosI
                .get(CHARACTERS_PAGE(page))
                .then(characters => {
                    // console.log(characters)
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