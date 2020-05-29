import moment from 'moment'

export function Time () {
  moment.locale('zh-CN')
  return moment()
}

export function parseTime (duration) {
  const s = duration % 60
  const m = Math.floor((duration % 3600) / 60)
  const h = Math.floor(duration / 3600)

  let time = ''
  if (h) time = `${h}:`
  time += `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`

  return time
}
