import Vue from 'vue';
import Vuex from 'vuex';
import axiosI from '../api/index'
import { CHARACTERS_PAGE, CHARACTER_ID } from '../api/route'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: [],
        info: [],
        oneCharacter: [],
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
        getInfo(state) {
            return state.info.pages
        },
        getOneCharacter(state) {
            return state.oneCharacter
        }
    },
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload
        },
        setInfo(state, payload) {
            state.info = payload
        },
        setOneCharacter(state, payload) {
            state.oneCharacter = payload
        }
    },
    actions: {
        loadCharacters({ commit }, page) {
            return axiosI
                .get(CHARACTERS_PAGE(page))
                .then(characters => {
                    commit('setCharacters', characters.data.results)
                    commit('setInfo', characters.data.info)
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        },
        loadOneCharacter({ commit }, id) {
            return axiosI
                .get(CHARACTER_ID(id))
                .then(oneCharacter => {
                    commit('setOneCharacter', oneCharacter.data)
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        },
        loadAllEpisodes({ }) {

        }
    },
})

export default store;