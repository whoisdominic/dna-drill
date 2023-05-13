const {
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
} = require("../arrays")

describe("Array challenges test suite", () => {
  test("lengthOfList", () => {
    expect(lengthOfList([1, 2, 3, 4, 5])).toBe(5)
    expect(lengthOfList([])).toBe(0)
    expect(lengthOfList([1])).toBe(1)
  })

  test("sumOfList", () => {
    expect(sumOfList([1, 2, 3, 4, 5])).toBe(15)
    expect(sumOfList([])).toBe(0)
    expect(sumOfList([-1, 2, -3, 4, -5])).toBe(-3)
  })

  test("maxOfList", () => {
    expect(maxOfList([1, 2, 3, 4, 5])).toBe(5)
    expect(maxOfList([1, 2, 3, 4, 135])).toBe(135)
  })

  test("minOfList", () => {
    expect(minOfList([1, 2, 3, 4, 5])).toBe(1)
  })

  test("reverseList", () => {
    expect(reverseList([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
    expect(reverseList([])).toEqual([])
  })

  test("appendToList", () => {
    expect(appendToList([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5])
    expect(appendToList([], 1)).toEqual([1])
  })

  test("insertIntoList", () => {
    expect(insertIntoList([1, 2, 4, 5], 2, 3)).toEqual([1, 2, 3, 4, 5])
    expect(insertIntoList([5, 2, 7, 5], 1, 3)).toEqual([5, 3, 2, 7, 5])
    expect(insertIntoList([10, 11, 12, 13, 15, 20], 5, 3)).toEqual([
      10, 11, 12, 13, 15, 3, 20,
    ])
  })

  test("removeFromList", () => {
    expect(removeFromList([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5])
    expect(removeFromList([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5])
  })

  test("sortList", () => {
    expect(sortList([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    expect(sortList([])).toEqual([])
  })

  test("valueExists", () => {
    expect(valueExists([1, 2, 3, 4, 5], 3)).toBe(true)
    expect(valueExists([1, 2, 3, 4, 5], 6)).toBe(false)
  })

  test("countOccurrences", () => {
    expect(countOccurrences([1, 2, 3, 4, 5, 5], 5)).toBe(2)
    expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0)
  })

  test("removeDuplicates", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5])
    expect(removeDuplicates([1, 1, 1, 1, 1])).toEqual([1])
    expect(removeDuplicates([])).toEqual([])
  })

  test("indexOfValue", () => {
    expect(indexOfValue([1, 2, 3, 4, 5], 3)).toBe(2)
    expect(indexOfValue([1, 2, 3, 4, 5], 6)).toBe(-1)
    expect(indexOfValue([], 1)).toBe(-1)
  })
})
