function quickSort(arr) {
  const stack = [{ left: 0, right: arr.length - 1 }]

  while (stack.length) {
    const { left, right } = stack.pop()
    if (left >= right) continue

    const pivotIndex = partition(arr, left, right)
    stack.push({ left, right: pivotIndex - 1 })
    stack.push({ left: pivotIndex + 1, right })
  }

  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }

  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = quickSort
