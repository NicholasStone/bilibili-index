export function randomNumber (min = 0, max = 1, fixed = 3) {
  const random = Math.random() * (max - min) + min
  return parseFloat(random.toFixed())
}

export function tenThousand (n, fixed = 1) {
  return n <= 9999 ? n : (n / 10000).toFixed(fixed) + '万'
}

export function generateSectionId (name) {
  return `section-${name}`
}
