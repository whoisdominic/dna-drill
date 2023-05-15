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
    if (this.isEmpty()) {
      return "Stack is empty"
    }
    return this.items.pop()
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack"
    }
    return this.items[this.items.length - 1]
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0
  }

  // Returns the size of the stack
  size() {
    return this.items.length
  }

  // Prints the elements of the stack
  printStack() {
    let str = ""
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " "
    }
    return str
  }
}

module.exports = Stack
