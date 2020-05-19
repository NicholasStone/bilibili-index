export const generateId = function () {
  return Math.floor(Math.random() * 10000)
}

export function * zIndex () {
  let index = 1000
  while (true) {
    yield index++
  }
}
