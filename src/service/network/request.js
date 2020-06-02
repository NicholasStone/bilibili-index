import axios from 'axios'
import { flatten, unflatten } from 'flat'

import requestOptions from './api'

export default function request (api, config = {}) {
  const baseURL = 'http://localhost:8080/api'
  const options = requestOptions(api, config)
  if (!options) return null
  const instance = axios.create({
    // baseURL,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    config.url = baseURL + '/' + config.url
    return config
  })

  instance.interceptors.response.use(({ data }) => {
    if (data.data) return handleDataProxy(data.data)
    if (data.result) return handleDataProxy(data.result)
  }, (err) => console.error(err))

  return instance(options)
}
// 递归 给所有图片属性添加 /cdn
export function handleDataProxy (data) {
  const flattedData = flatten(data)
  for (const key in flattedData) {
    if (Object.prototype.hasOwnProperty.call(flattedData, key) && typeof flattedData[key] === 'string') {
      flattedData[key] = flattedData[key].replace(/^(http:)?\/\/i(.*).hdslb.com/, '/cdn')
    }
  }
  return unflatten(flattedData)
}
