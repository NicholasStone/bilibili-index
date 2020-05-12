import WebPageConfig from './webpage.config'

export default function (webpage, args, params) {
  return WebPageConfig[webpage]
}
