const Queue = require("../queue") // assuming Queue class is exported in Queue.js file

describe("Queue", () => {
  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  test("Has correct methods", () => {
    expect(queue.enqueue).toBeDefined()
    expect(queue.dequeue).toBeDefined()
    expect(queue.front).toBeDefined()
    expect(queue.isEmpty).toBeDefined()
    expect(queue.size).toBeDefined()
  })

  test("Enqueues and dequeues items correctly", () => {
    queue.enqueue("item1")
    queue.enqueue("item2")
    queue.enqueue("item3")

    expect(queue.dequeue()).toBe("item1")
    expect(queue.dequeue()).toBe("item2")
    expect(queue.dequeue()).toBe("item3")
  })

  test("Peeks at the front item correctly", () => {
    queue.enqueue("item1")
    queue.enqueue("item2")

    expect(queue.front()).toBe("item1")
    queue.dequeue()
    expect(queue.front()).toBe("item2")
  })

  test("Checks if the queue is empty correctly", () => {
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue("item1")
    expect(queue.isEmpty()).toBe(false)
  })

  test("Returns the size of the queue correctly", () => {
    expect(queue.size()).toBe(0)
    queue.enqueue("item1")
    expect(queue.size()).toBe(1)
    queue.enqueue("item2")
    expect(queue.size()).toBe(2)
  })
})
