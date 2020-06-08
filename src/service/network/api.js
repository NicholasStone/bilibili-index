import apis from 'Network/api.config'
import section from 'Index/config/section'

export default function requestOptions (apiName, params, config = {}) {
  if (!apis[apiName]) throw TypeError(`API ${apiName} not found`)

  const { url, method, params: requiredParams, adapter } = apis[apiName]
  const requestOption = {
    url,
    method,
    adapter,
    params: {},
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

  return requestOption
}

export function getRid (region) {
  return section[region]
}
