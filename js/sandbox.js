const bubbleSort = require("./sorting/bubble")
const quickSort = require("./sorting/quick")
const mergeSort = require("./sorting/merge")
const { performance } = require("perf_hooks")

const arraySize = 1_000_000 // Modify this value for the desired array size
const minValue = 1 // Modify this value for the minimum value in the range
const maxValue = 5000 // Modify this value for the maximum value in the range

function generateRandomArray(size, min, max) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return array
}

const allArr = generateRandomArray(100000, minValue, maxValue)

let startTime = performance.now()

bubbleSort(allArr)
// mergeSort(allArr)
// quickSort(allArr)

let endTime = performance.now()

console.log(`Execution time: ${endTime - startTime} milliseconds`)
