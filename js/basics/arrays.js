// Returns the length of a list
function lengthOfList(lst) {
  return lst.length
}

// Returns the sum of elements in a list
/**
 *
 * @param {[number]} lst
 * @returns
 */
function sumOfList(lst) {
  let sum = 0
  lst.forEach((num) => {
    sum += num
  })

  return sum
}

// Returns the maximum element in a list
function maxOfList(lst) {
  let max = null
  lst.forEach((num) => {
    if (!max) {
      max = num
    } else if (num > max) {
      max = num
    }
  })
  return max
}

// Returns the minimum element in a list
function minOfList(lst) {
  let min = null
  lst.forEach((num) => {
    if (!min) {
      min = num
    } else if (num < min) {
      min = num
    }
  })
  return min
}

// Returns a reversed list
function reverseList(lst) {
  return lst.reverse()
}

// Appends a value at the end of the list
function appendToList(lst, value) {
  const copy = [...lst]
  copy.push(value)
  return copy
}

// Inserts a value at a specific position in a list
function insertIntoList(lst, index, value) {
  lst.splice(index, 0, value)
  return lst
}

// Removes the first occurrence of a value in a list
function removeFromList(lst, value) {
  for (let i = 0; i < lst.length; i++) {
    const item = lst[i]
    if (item === value) {
      lst.splice(i, 1)
    }
  }
  return lst
}

// Sorts a list in ascending order
function sortList(lst) {
  return lst.sort((a, b) => a - b)
}

// Checks if a value exists in a list
function valueExists(lst, value) {
  for (let i = 0; i < lst.length; i++) {
    if (value === lst[i]) {
      return true
    }
  }
  return false
}

// Counts the occurrence of a value in a list
function countOccurrences(lst, value) {
  let count = 0
  for (let i = 0; i < lst.length; i++) {
    const element = lst[i]
    if (element === value) {
      count++
    }
  }
  return count
}

// Returns a list with duplicates removed
function removeDuplicates(lst) {
  return Array.from(new Set(lst))
}

// Returns the index of a value in a list
function indexOfValue(lst, value) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === value) {
      return i
    }
  }
  return -1
}

module.exports = {
  lengthOfList,
  sumOfList,
  maxOfList,
  minOfList,
  reverseList,
  appendToList,
  insertIntoList,
  removeFromList,
  sortList,
  valueExists,
  countOccurrences,
  removeDuplicates,
  indexOfValue,
}
