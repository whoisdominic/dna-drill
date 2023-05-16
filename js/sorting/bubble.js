function bubbleSort(inputArr) {
  let inputLength = inputArr.length

  for (let i = 0; i < inputLength; i++) {
    let swapped = false
    for (let j = 0; j < inputLength - i - 1; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j]
        inputArr[j] = inputArr[j + 1]
        inputArr[j + 1] = temp
        swapped = true
      }
    }

    // If no two elements were swapped inside inner for loop, then break outer loop
    if (!swapped) {
      break
    }
  }

  return inputArr
}

module.exports = bubbleSort
