class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  // Insert at end
  append(data) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }

    current.next = new Node(data)
  }

  // Insert at beginning
  prepend(data) {
    this.head = new Node(data, this.head)
  }

  // Delete with value
  deleteWithValue(data) {
    if (!this.head) {
      return
    }

    if (this.head.data === data) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
        return
      }
      current = current.next
    }
  }

  // Search for element
  search(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return true
      }
      current = current.next
    }
    return false
  }

  // Print the linked list
  print() {
    let current = this.head
    let result = ""
    while (current) {
      result += current.data + " -> "
      current = current.next
    }
    return result + "null"
  }
}

module.exports = LinkedList
