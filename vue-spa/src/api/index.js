import axios from "axios";

const axiosI = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export default axiosI