class Stack {
  constructor() {
    this.items = []
  }

  // Pushes an element onto the stack
  push(element) {
    this.items.push(element)
  }

  // Pops the top element from the stack
  pop() {
    if (this.isEmpty) {
      return "Stack is empty"
    }
    return this.items.pop()
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty) {
      return "No elements in the stack"
    }
    return this.items[this.items.length - 1]
  }

  // Checks if the stack is empty
  get isEmpty() {
    return this.items.length === 0
  }

  // Returns the size of the stack
  get size() {
    return this.items.length
  }
}

module.exports = Stack
