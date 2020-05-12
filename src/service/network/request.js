import axios from 'axios'

export default function request (config) {
  const instance = axios.create({
    baseURL: 'http://dev.nichospace.com:28001',
    timeout: 5000
  })

  instance.interceptors.response.use((result) => result.data, (err) => console.error(err))

  return instance(config)
}
