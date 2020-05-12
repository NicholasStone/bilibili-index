import moment from 'moment'

export default function () {
  moment.locale('zh-CN')
  return moment()
}
