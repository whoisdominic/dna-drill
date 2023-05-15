const BinarySearchTree = require("../binarySearchTree")

describe("BinarySearchTree", () => {
  let bst

  beforeEach(() => {
    bst = new BinarySearchTree()
  })

  test("Inserts values correctly", () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)

    expect(bst.contains(10)).toBe(true)
    expect(bst.contains(5)).toBe(true)
    expect(bst.contains(15)).toBe(true)
    expect(bst.contains(3)).toBe(true)
    expect(bst.contains(20)).toBe(false)
  })

  test("Removes values correctly", () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)

    bst.remove(7)
    bst.remove(10)

    expect(bst.contains(10)).toBe(false)
    expect(bst.contains(7)).toBe(false)
    expect(bst.contains(12)).toBe(true)
    expect(bst.contains(5)).toBe(true)
  })

  test("Gets minimum and maximum values correctly", () => {
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)

    expect(bst.getMin()).toBe(3)
    expect(bst.getMax()).toBe(15)
  })
})
