import Vue from 'vue';
import Vuex from 'vuex';
import axiosI from '../api/index'
import { CHARACTERS_PAGE, CHARACTER_ID, EPISODE_PAGE } from '../api/route'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: [],
        info: [],
        oneCharacter: [],
    },
    getters: {
        getAllCharacters(state) {
            return state.characters.map(item => {
                let episodethree = item.episode.slice(0, 3)
                let stateItem = item
                stateItem.episode = episodethree
                return stateItem
            })
        },
        getInfoCharacters(state) {
            return state.info.pages
        },
        getOneCharacter(state) {
            return state.oneCharacter
        }
    },
    mutations: {
        setAllCharacters(state, payload) {
            state.characters = payload
        },
        setInfoCharacters(state, payload) {
            state.info = payload
        },
        setOneCharacter(state, payload) {
            state.oneCharacter = payload
        }
    },
    actions: {
        loadAllCharacters({ commit }, page) {
            return axiosI
                .get(CHARACTERS_PAGE(page))
                .then(characters => {
                    commit('setAllCharacters', characters.data.results)
                    commit('setInfoCharacters', characters.data.info)
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
        loadAllEpisodes({ commit }, page) {
            return axiosI
                .get(EPISODE_PAGE(page))
                .then(episodes => {
                    commit('setAllEpisodes', episodes.data.results)
                    commit()
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        }
    },
})

export default store;