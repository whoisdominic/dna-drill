const {
  lengthOfDict,
  getValue,
  addOrUpdateKeyValue,
  removeKeyValue,
  getAllKeys,
  getAllValues,
  keyExists,
} = require("../dictionaries")

test("lengthOfDict", () => {
  expect(lengthOfDict({ a: 1, b: 2, c: 3 })).toBe(3)
  expect(lengthOfDict({ a: 1, b: 2, c: 3 })).toBe(3)
  expect(lengthOfDict({ a: [1], b: 2, c: 3, d: { b: 3 } })).toBe(4)
  expect(lengthOfDict({ a: { a: "a" }, b: { b: "b" } })).toBe(2)
  expect(lengthOfDict({})).toBe(0)
})

test("getValue", () => {
  expect(getValue({ a: 1, b: 2, c: 3 }, "b")).toBe(2)
  expect(getValue({ a: 1, b: 2, c: 3 }, "d")).toBeUndefined()
})

test("addOrUpdateKeyValue", () => {
  const dictionary = { a: 1, b: 2 }
  addOrUpdateKeyValue(dictionary, "c", 3)
  expect(dictionary).toEqual({ a: 1, b: 2, c: 3 })
  addOrUpdateKeyValue(dictionary, "b", 4)
  expect(dictionary).toEqual({ a: 1, b: 4, c: 3 })
})

test("removeKeyValue", () => {
  const dictionary = { a: 1, b: 2, c: 3 }
  removeKeyValue(dictionary, "b")
  removeKeyValue(dictionary, "d")
  expect(dictionary).toEqual({ a: 1, c: 3 })
})

test("getAllKeys", () => {
  expect(getAllKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"])
  expect(getAllKeys({})).toEqual([])
})

test("getAllValues", () => {
  expect(getAllValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  expect(getAllValues({})).toEqual([])
})

test("keyExists", () => {
  const dictionary = { a: 1, b: 2, c: 3 }
  expect(keyExists(dictionary, "b")).toBe(true)
  expect(keyExists(dictionary, "d")).toBe(false)
})
