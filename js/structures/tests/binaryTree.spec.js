const BinaryTree = require("../binaryTree")

describe("BinaryTree", () => {
  let binaryTree

  beforeEach(() => {
    binaryTree = new BinaryTree()
  })

  test("Inserts values correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    expect(binaryTree.contains(10)).toBe(true)
    expect(binaryTree.contains(5)).toBe(true)
    expect(binaryTree.contains(15)).toBe(true)
    expect(binaryTree.contains(3)).toBe(true)
    expect(binaryTree.contains(7)).toBe(true)
    expect(binaryTree.contains(20)).toBe(false)
  })

  test("Removes values correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    binaryTree.remove(5)
    binaryTree.remove(15)

    expect(binaryTree.contains(5)).toBe(false)
    expect(binaryTree.contains(15)).toBe(false)
    expect(binaryTree.contains(10)).toBe(true)
    expect(binaryTree.contains(3)).toBe(true)
    expect(binaryTree.contains(7)).toBe(true)
  })

  test("Performs pre-order traversal correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    const expected = [10, 5, 3, 7, 15]
    const result = binaryTree.getPreOrderTraversal()

    expect(result).toEqual(expected)
  })

  test("Performs in-order traversal correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    const expected = [3, 5, 7, 10, 15]
    const result = binaryTree.getInOrderTraversal()

    expect(result).toEqual(expected)
  })

  test("Performs post-order traversal correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    const expected = [3, 7, 5, 15, 10]
    const result = binaryTree.getPostOrderTraversal()

    expect(result).toEqual(expected)
  })

  test("Performs level-order traversal correctly", () => {
    binaryTree.insert(10)
    binaryTree.insert(5)
    binaryTree.insert(15)
    binaryTree.insert(3)
    binaryTree.insert(7)

    const expected = [10, 5, 15, 3, 7]
    const result = binaryTree.getLevelOrderTraversal()

    expect(result).toEqual(expected)
  })
})
