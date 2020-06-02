import apis from 'Network/api.config'
import section from 'Index/config/section'

export default function requestOptions (apiName, config) {
  if (!apis[apiName]) {
    console.error(`API ${apiName} not found`)
    return null
  }
  const { url, method, params: requiredParams } = apis[apiName]
  const requestOption = {
    url,
    method,
    params: {}
  }

  // assign params
  if (requiredParams) {
    if (!config.params) {
      console.warn(`params for api ${apiName} is required but not found`)
    } else {
      for (const paramsKes in requiredParams) {
        if (Object.prototype.hasOwnProperty.call(config.params, paramsKes)) {
          requestOption.params[paramsKes] = config.params[paramsKes]
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
