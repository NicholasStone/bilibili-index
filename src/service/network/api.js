import apis from 'Network/api.config'
import section from 'Index/config/section'

export default function requestOptions (apiName, params, data, config = {}) {
  if (!apis[apiName]) throw TypeError(`API ${apiName} not found`)

  const { url, method, params: requiredParams, data: requiredData, adapter } = apis[apiName]
  const requestOption = {
    url,
    method,
    adapter,
    params: {},
    data: {},
    ...config
  }

  // assign params
  if (requiredParams) {
    if (!params) {
      console.warn(`params for api ${apiName} is required but not found`)
    } else {
      for (const paramsKes in requiredParams) {
        if (Object.prototype.hasOwnProperty.call(params, paramsKes)) {
          requestOption.params[paramsKes] = params[paramsKes]
        } else {
          console.warn(`param ${paramsKes} required but not found`)
        }
      }
    }
  }

  if (requiredData) {
    if (!data) {
      console.warn(`data for api ${apiName} is required but not found`)
    } else {
      for (const dataKey in requiredData) {
        if (Object.prototype.hasOwnProperty.call(data, dataKey)) {
          requestOption.data[dataKey] = data[dataKey]
        } else {
          console.warn(`param ${dataKey} required but not found`)
        }
      }
    }
  }

  return requestOption
}

export function getRid (region) {
  return section[region]
}
