const MaxHeap = require("../maxHeap")

describe("MaxHeap", () => {
  let maxHeap

  beforeEach(() => {
    maxHeap = new MaxHeap()
  })

  test("Inserts values correctly", () => {
    maxHeap.insert(10)
    maxHeap.insert(5)
    maxHeap.insert(20)

    expect(maxHeap.getMax()).toBe(20)
    expect(maxHeap.size()).toBe(3)
  })

  test("Extracts maximum values correctly", () => {
    maxHeap.insert(10)
    maxHeap.insert(5)
    maxHeap.insert(20)

    expect(maxHeap.extractMax()).toBe(20)
    expect(maxHeap.getMax()).toBe(10)
    expect(maxHeap.size()).toBe(2)
  })

  test("Handles extraction from an empty heap", () => {
    expect(maxHeap.extractMax()).toBe(null)
  })

  test("Returns null when getting max from an empty heap", () => {
    expect(maxHeap.getMax()).toBe(null)
  })

  test("Returns true for isEmpty on an empty heap", () => {
    expect(maxHeap.isEmpty()).toBe(true)
  })

  test("Returns false for isEmpty on a non-empty heap", () => {
    maxHeap.insert(10)
    expect(maxHeap.isEmpty()).toBe(false)
  })

  test("Returns the correct size of the heap", () => {
    maxHeap.insert(10)
    maxHeap.insert(5)
    maxHeap.insert(20)

    expect(maxHeap.size()).toBe(3)
  })
})
