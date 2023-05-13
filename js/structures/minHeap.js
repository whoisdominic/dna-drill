class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  extractMin() {
    if (this.isEmpty()) {
      return null
    }

    const min = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.sinkDown(0)
    }
    return min
  }

  getMin() {
    return this.heap[0] || null
  }

  isEmpty() {
    return this.heap.length === 0
  }

  size() {
    return this.heap.length
  }

  bubbleUp(index) {
    const element = this.heap[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]
      if (element >= parent) {
        break
      }
      this.heap[parentIndex] = element
      this.heap[index] = parent
      index = parentIndex
    }
  }

  sinkDown(index) {
    const length = this.heap.length
    const element = this.heap[index]
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let smallest = index
      let leftChild, rightChild

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild < element) {
          smallest = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (rightChild < element && !leftChild) ||
          (rightChild < leftChild && leftChild)
        ) {
          smallest = rightChildIndex
        }
      }

      if (index === smallest) {
        break
      }

      this.heap[index] = this.heap[smallest]
      this.heap[smallest] = element
      index = smallest
    }
  }
}

module.exports = MinHeap
