export function randomNumber (min = 0, max = 1, fixed = 3) {
  const random = Math.random() * (max - min) + min
  return parseFloat(random.toFixed())
}
