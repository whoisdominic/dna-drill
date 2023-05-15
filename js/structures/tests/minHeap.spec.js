const MinHeap = require("../minHeap")

describe("MinHeap", () => {
  let minHeap

  beforeEach(() => {
    minHeap = new MinHeap()
  })

  test("Inserts values correctly", () => {
    minHeap.insert(10)
    minHeap.insert(5)
    minHeap.insert(20)

    expect(minHeap.getMin()).toBe(5)
    expect(minHeap.size()).toBe(3)
  })

  test("Extracts minimum values correctly", () => {
    minHeap.insert(10)
    minHeap.insert(5)
    minHeap.insert(20)

    expect(minHeap.extractMin()).toBe(5)
    expect(minHeap.getMin()).toBe(10)
    expect(minHeap.size()).toBe(2)
  })

  test("Handles extraction from an empty heap", () => {
    expect(minHeap.extractMin()).toBe(null)
  })

  test("Returns null when getting min from an empty heap", () => {
    expect(minHeap.getMin()).toBe(null)
  })

  test("Returns true for isEmpty on an empty heap", () => {
    expect(minHeap.isEmpty()).toBe(true)
  })

  test("Returns false for isEmpty on a non-empty heap", () => {
    minHeap.insert(10)
    expect(minHeap.isEmpty()).toBe(false)
  })

  test("Returns the correct size of the heap", () => {
    minHeap.insert(10)
    minHeap.insert(5)
    minHeap.insert(20)

    expect(minHeap.size()).toBe(3)
  })
})
