function generateRandomArray(size, min, max) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return array
}

module.exports = {
  generateRandomArray,
}
