class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // Insert at end
  append(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  // Insert at beginning
  prepend(data) {
    let newNode = new Node(data, this.head)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.head.prev = newNode
      this.head = newNode
    }
  }

  // Delete with value
  deleteWithValue(data) {
    if (!this.head) {
      return
    }

    // If head needs to be deleted
    while (this.head && this.head.data === data) {
      this.head = this.head.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }
    }

    let current = this.head
    while (current) {
      if (current.data === data) {
        if (current.next) {
          current.next.prev = current.prev
        } else {
          this.tail = current.prev
        }
        current.prev.next = current.next
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
      result += current.data + " <-> "
      current = current.next
    }
    return result + "null"
  }
}

module.exports = DoubleLinkedList
