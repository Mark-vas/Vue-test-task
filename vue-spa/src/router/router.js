import Vue from 'vue'
import VueRouter from 'vue-router'
import RickMortyList from '../views/RickMortyList.vue'
import RickMortyCharacter from '../views/RickMortyCharacter.vue'
import RickMortyEpisode from '../views/RickMortyEpisode.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'RickMortyList',
        component: RickMortyList
    },
    {
        path: '/character',
        name: 'RickMortyCharacter',
        component: RickMortyCharacter
    },
    {
        path: '/episode',
        name: 'RickMortyEpisode',
        component: RickMortyEpisode
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router