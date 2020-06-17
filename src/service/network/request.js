import axios from 'axios'
import { flatten, unflatten } from 'flat'

import requestOptions from './api'

export default function request ({ api, params, data, onRequest, onResponse }) {
  const { adapter, ...options } = requestOptions(api, params, data)

  const instance = axios.create({
    baseURL: window.location.origin,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    if (onRequest) onResponse()
    config.url = window.location.origin + '/api/' + config.url
    // config.url = 'http://localhost:8080' + '/api/' + config.url
    return config
  })

  instance.interceptors.response.use(({ data }) => {
    if (onResponse) onResponse()
    if (data.data) return handleDataProxy(data.data)
    if (data.result) return handleDataProxy(data.result)
  }, err => console.warn(`网络错误 api ${api} 请求失败`, err))

  return instance(options).then(data => adapter ? Promise.resolve(adapter(data)) : Promise.resolve(data))
}

export function requestLocal (url, options = {}) {
  const instance = axios.create({
    baseURL: window.location.origin,
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
