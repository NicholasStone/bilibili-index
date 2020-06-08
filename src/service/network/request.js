import axios from 'axios'
import { flatten, unflatten } from 'flat'

import requestOptions from './api'

const BASE_URL = 'http://localhost:8080/api'

export default function request ({ api, params, onRequest, onResponse }) {
  const { adapter, ...options } = requestOptions(api, params)

  const instance = axios.create({ timeout: 5000 })

  instance.interceptors.request.use(config => {
    if (onRequest) onResponse()
    config.url = BASE_URL + '/' + config.url
    return config
  })

  instance.interceptors.response.use(({ data }) => {
    if (onResponse) onResponse()
    if (data.data) return handleDataProxy(data.data)
    if (data.result) return handleDataProxy(data.result)
  }, err => console.trace(err))

  return instance(options).then(data => adapter ? Promise.resolve(adapter(data)) : Promise.resolve(data))
}

export function requestLocal (url, options = {}) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  instance.interceptors.response.use(({ data }) => data.data, err => console.trace(err))

  return instance(url, options)
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
