import axios from 'axios'

const API = axios.create({
  baseURL: 'https://fakestoreAPI.com'
})

export default API
