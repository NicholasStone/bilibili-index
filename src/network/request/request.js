import axios from 'axios'

export default function request (config) {
  const instance = axios.create({
    baseURL: 'https://dev.nichospace.com',
    timeout: 5000
  })

  instance.interceptor.response.use((result) => result.data, (err) => console.error(err))

  return instance(config)
}
