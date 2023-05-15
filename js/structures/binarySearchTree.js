class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (value === current.value) {
        return undefined
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  contains(value) {
    let current = this.root
    while (current) {
      if (value === current.value) {
        return true
      }
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null
      }
      if (value === node.value) {
        // Case 1: No children
        if (!node.left && !node.right) {
          return null
        }
        // Case 2: One child (right)
        if (!node.left) {
          return node.right
        }
        // Case 2: One child (left)
        if (!node.right) {
          return node.left
        }
        // Case 3: Two children
        let temp = node.right
        while (temp.left) {
          temp = temp.left
        }
        node.value = temp.value
        node.right = removeNode(node.right, temp.value)
        return node
      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }

    this.root = removeNode(this.root, value)
  }

  getMin() {
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  getMax() {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current.value
  }
}

module.exports = BinarySearchTree
