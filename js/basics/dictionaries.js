// Returns the length of a dictionary (number of key-value pairs)
function lengthOfDict(dct) {
  return Object.keys(dct).length
}

// Returns the value associated with a specific key in a dictionary
function getValue(dct, key) {
  return dct[key]
}

// Adds or updates a key-value pair in a dictionary
function addOrUpdateKeyValue(dct, key, value) {
  return (dct[key] = value)
}

// Removes a key-value pair from a dictionary
function removeKeyValue(dct, key) {
  delete dct[key]
  return dct
}

// Returns a list of all keys in a dictionary
function getAllKeys(dct) {
  return Object.keys(dct)
}

// Returns a list of all values in a dictionary
function getAllValues(dct) {
  return Object.values(dct)
}

// Checks if a key exists in a dictionary
function keyExists(dct, key) {
  return Object(dct).hasOwnProperty(key)
}

module.exports = {
  lengthOfDict,
  getValue,
  addOrUpdateKeyValue,
  removeKeyValue,
  getAllKeys,
  getAllValues,
  keyExists,
}
