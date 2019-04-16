import axios from 'axios';

const URL = 'https://newsapi.org/v2';

const Token = 'ad719598305c4ce580bf8cb1bee981ed';


const apiClient = axios.create({
  baseURL: URL,
  headers: { Authorization: 'Bearer ' + Token }
})

apiClient.interceptors.response.use(response =>
  response, (error) => {
  if (error.response.status === 401 && !window.location.href.includes('login')) {
    document.location.href = '/login'
  }
  return Promise.reject(error)
})

export default {
  sources: {
    getSources() {
      return apiClient.get('/sources')
    }
  },
  data: {
    getData () {
      return apiClient.get(`/top-headlines?country=us`)
    },
    getDataByCategory(category) {
      return apiClient.get(`/top-headlines?country=us&category=${category}`)
    }
  }
}