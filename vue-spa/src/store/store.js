import Vue from 'vue';
import Vuex from 'vuex';
import axiosI from '../api/index'
import { CHARACTERS_PAGE, CHARACTER_ID, EPISODE_PAGE, EPISODE_ID } from '../api/route'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: [],
        infoCharacters: '',
        oneCharacter: [],
        episodes: [],
        infoEpisodes: [],
        imageCharacter: [],
        oneEpisode: []
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
            return state.infoCharacters.pages
        },
        getOneCharacter(state) {
            return state.oneCharacter
        },
        getAllEpisodes(state) {
            return state.episodes
        },
        getInfoEpisodes(state) {
            return state.infoEpisodes.pages
        },
        getOneEpisode(state) {
            return state.oneEpisode
        }
    },
    mutations: {
        setAllCharacters(state, payload) {
            state.characters = payload
        },
        setInfoCharacters(state, payload) {
            state.infoCharacters = payload
        },
        setOneCharacter(state, payload) {
            state.oneCharacter = payload
        },
        setAllEpisodes(state, payload) {
            state.episodes = payload
        },
        setInfoEpisodes(state, payload) {
            state.infoEpisodes = payload
        },
        setOneEpisode(state, payload) {
            state.oneEpisode = payload
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
                    commit('setInfoEpisodes', episodes.data.info)
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        },
        loadImageCharacter({ commit }, image) {
            return axios
                .get(image)
                .then(i => {
                    return i.data.image
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        },
        loadOneEpisode({ commit }, id) {
            return axiosI
                .get(EPISODE_ID(id))
                .then(oneEpisode => {
                    commit('setOneEpisode', oneEpisode.data)
                })
                .catch(error => {
                    console.log('error');
                    console.log(error);
                })
        }
    },
})

export default store;