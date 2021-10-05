import Vue from 'vue'
import VueRouter from 'vue-router'
import RickMortyList from '../views/RickMortyList.vue'
import OneCharacter from '../views/OneCharacter.vue'
import RickMortyEpisodes from '../views/RickMortyEpisodes.vue'
import OneEpisodeBlock from '../views/OneEpisodeBlock.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'RickMortyList',
        component: RickMortyList
    },
    {
        path: '/character/:id',
        name: 'OneCharacter',
        component: OneCharacter
    },
    {
        path: '/episode',
        name: 'RickMortyEpisode',
        component: RickMortyEpisodes
    },
    {
        path: '/episode/:id',
        name: 'OneEpisodeBlock',
        component: OneEpisodeBlock
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router