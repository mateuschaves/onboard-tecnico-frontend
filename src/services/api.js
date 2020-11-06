import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

api.interceptors.request.use(
  (config) => config,
  (error) => {
    switch (error.response.status) {
      case 400:
        if (error?.response?.data?.validation_failed) {
          const [message] = error?.response?.data?.errors
          toast(message, { type: 'error' })
        } else {
          toast('Verifique as informações e tente novamente', { type: 'error' })
        }
        break
      case 500:
        toast('Algo de errado aconteceu, tente novamente.', { type: 'error' })
        break
      default:
        toast('Verifique sua conexão com a interet')
    }

    return Promise.reject(error)
  }
)
export default api
