// arithmetic.test.js
const {
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
} = require("../arithmetic");

test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 2)).toBe(1);
  expect(add(0, 0)).toBe(0);
});

test("subtract", () => {
  expect(subtract(2, 1)).toBe(1);
  expect(subtract(-1, -2)).toBe(1);
  expect(subtract(0, 0)).toBe(0);
});

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, -2)).toBe(2);
  expect(multiply(0, 1)).toBe(0);
});

test("divide", () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(-4, -2)).toBe(2);
  expect(divide(0, 1)).toBe(0);
});

test("modulus", () => {
  expect(modulus(10, 3)).toBe(1);
  expect(modulus(-10, 3)).toBe(-1);
  expect(modulus(0, 1)).toBe(0);
});

test("exponent", () => {
  expect(exponent(2, 3)).toBe(8);
  expect(exponent(-2, 3)).toBe(-8);
  expect(exponent(0, 1)).toBe(0);
});

test("floor_division", () => {
  expect(floor_division(10, 3)).toBe(3);
  expect(floor_division(-10, 3)).toBe(-4);
  expect(floor_division(0, 1)).toBe(0);
});

test("absolute", () => {
  expect(absolute(7)).toBe(7);
  expect(absolute(-5)).toBe(5);
  expect(absolute(0)).toBe(0);
});

test("round_number", () => {
  expect(round_number(10.2)).toBe(10);
  expect(round_number(10.6)).toBe(11);
  expect(round_number(-10.8)).toBe(-11);
});

test("square_root", () => {
  expect(square_root(9)).toBe(3);
  expect(square_root(1)).toBe(1);
  expect(square_root(0)).toBe(0);
});
