// return the first character of a string
function firstChar(value) {
  return value[0]
}

// return the last character of a string
function lastChar(value) {
  return value.slice(-1)
}

// return the first n characters of a string
/**
 *
 * @param {string} value
 * @param {number} n
 * @returns
 */
function firstNChars(value, n) {
  return value.slice(0, n)
}

// return the last n characters of a string
function lastNChars(value, n) {
  return value.slice(value.length - n)
}

// return the length of a string
function lengthOfString(value) {
  return value.length
}

// reverse a string
function reverseString(value) {
  return value.split("").reverse().join("")
}

// return the frequency of each character
function countLettersFreq(value) {
  const letters = {}
  for (let i = 0; i < value.length; i++) {
    let letter = value[i]
    console.log(letter)
    if (letter in letters) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }

  return letters
}

// return the word count
function countWords(value) {
  if (!value.length) {
    return 0
  }
  return value.split(" ").length
}

// Left Rotation and Right Rotation of a String
function leftRotateString(value, rotationCount) {
  // Ensure the rotationCount is within the length of the string.
  rotationCount = rotationCount % value.length

  // Slice the string from rotationCount index and concatenate the sliced part at the end.
  return value.slice(rotationCount) + value.slice(0, rotationCount)
}

function rightRotateString(value, rotationCount) {
  // Ensure the rotationCount is within the length of the string.
  rotationCount = rotationCount % value.length

  // For right rotation, slice the string from length - rotationCount index and concatenate the sliced part at the beginning.
  return (
    value.slice(value.length - rotationCount) +
    value.slice(0, value.length - rotationCount)
  )
}

// Searching For Characters and Substring in a String
function searchCharInString(value, character) {
  return value.includes(character)
}

// Sort string of characters
function sortString(value) {
  return value.split("").sort().join("")
}

// Swap characters in a String
function swapCharsInString(value, index1, index2) {
  let arr = value.split("")
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp

  return arr.join("")
}

// How to insert characters in a string at a certain position?
function insertCharsInString(value, index, chars) {
  let array = value.split("")
  array.splice(index, 0, chars)
  return array.join("")
}

// Remove all occurrences of a character in a string
function removeAllCharInString(value, character) {
  let reg = new RegExp(character, "g")
  return value.replace(reg, "")
}

module.exports = {
  firstChar,
  lastChar,
  firstNChars,
  lastNChars,
  lengthOfString,
  reverseString,
  countLettersFreq,
  countWords,
  leftRotateString,
  rightRotateString,
  searchCharInString,
  sortString,
  swapCharsInString,
  insertCharsInString,
  removeAllCharInString,
}
