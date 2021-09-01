import axios from 'axios'

const API = axios.create({
  baseURL: 'https://60520c72fb49dc00175b768c.mockapi.io/store/v1/'
})

export default API
