const mergeSort = require("../merge")

describe("mergeSort", () => {
  test("Sorts an array of numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 2, 1]
    const sortedArr = mergeSort(arr)
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 8])
  })

  test("Sorts an array of strings in lexicographical order", () => {
    const arr = ["zebra", "apple", "banana", "carrot"]
    const sortedArr = mergeSort(arr)
    expect(sortedArr).toEqual(["apple", "banana", "carrot", "zebra"])
  })

  test("Returns an empty array when given an empty array", () => {
    const arr = []
    const sortedArr = mergeSort(arr)
    expect(sortedArr).toEqual([])
  })

  test("Sorts an array with duplicate values", () => {
    const arr = [5, 2, 1, 4, 2, 3, 5]
    const sortedArr = mergeSort(arr)
    expect(sortedArr).toEqual([1, 2, 2, 3, 4, 5, 5])
  })
})
