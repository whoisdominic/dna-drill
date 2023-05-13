class Queue {
  constructor() {
    this.items = []
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.items.push(element)
  }

  // Removes an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"
    }
    return this.items.shift()
  }

  // Returns the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in the queue"
    }
    return this.items[0]
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length == 0
  }

  // Returns the size of the queue
  size() {
    return this.items.length
  }

  // Prints the elements of the queue
  printQueue() {
    var str = ""
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " "
    return str
  }
}

module.exports = Queue
