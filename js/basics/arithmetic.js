// arithmetic.js

// Returns the sum of two numbers
function add(a, b) {
  return a + b
}

// Returns the difference of two numbers
function subtract(a, b) {
  return a - b
}

// Returns the product of two numbers
function multiply(a, b) {
  return a * b
}

// Returns the quotient of two numbers
function divide(a, b) {
  return a / b
}

// Returns the remainder of a division
function modulus(a, b) {
  return a % b
}

// Returns the result of a raised to the power of b
function exponent(a, b) {
  return a ** b
}

// Returns the floor division of two numbers
function floor_division(a, b) {
  return Math.floor(a / b)
}

// Returns the absolute value of a number
function absolute(a) {
  return Math.abs(a)
}

// Returns a rounded number
function round_number(a, b) {
  return Math.round(a, b)
}

// Returns the square root of a number
function square_root(a) {
  return Math.sqrt(a)
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponent,
  floor_division,
  absolute,
  round_number,
  square_root,
}
