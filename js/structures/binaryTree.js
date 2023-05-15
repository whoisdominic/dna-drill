class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    } else {
      const queue = [this.root]

      while (queue.length) {
        const node = queue.shift()

        if (!node.left) {
          node.left = newNode
          break
        } else if (!node.right) {
          node.right = newNode
          break
        }

        queue.push(node.left, node.right)
      }
    }
  }

  contains(value) {
    return this.traverseAndSearch(this.root, value)
  }

  traverseAndSearch(node, value) {
    if (!node) {
      return false
    }

    if (node.value === value) {
      return true
    }

    return (
      this.traverseAndSearch(node.left, value) ||
      this.traverseAndSearch(node.right, value)
    )
  }

  remove(value) {
    this.root = this.removeNode(this.root, value)
  }

  removeNode(node, value) {
    if (!node) {
      return null
    }

    if (node.value === value) {
      if (!node.left && !node.right) {
        return null
      } else if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        const minValue = this.findMinValue(node.right)
        node.value = minValue
        node.right = this.removeNode(node.right, minValue)
        return node
      }
    }

    node.left = this.removeNode(node.left, value)
    node.right = this.removeNode(node.right, value)
    return node
  }

  findMinValue(node) {
    while (node.left) {
      node = node.left
    }
    return node.value
  }

  getPreOrderTraversal() {
    const result = []
    this.preOrderTraversal(this.root, result)
    return result
  }

  preOrderTraversal(node, result) {
    if (!node) {
      return
    }
    result.push(node.value)
    this.preOrderTraversal(node.left, result)
    this.preOrderTraversal(node.right, result)
  }

  getInOrderTraversal() {
    const result = []
    this.inOrderTraversal(this.root, result)
    return result
  }

  inOrderTraversal(node, result) {
    if (!node) {
      return
    }
    this.inOrderTraversal(node.left, result)
    result.push(node.value)
    this.inOrderTraversal(node.right, result)
  }

  getPostOrderTraversal() {
    const result = []
    this.postOrderTraversal(this.root, result)
    return result
  }

  postOrderTraversal(node, result) {
    if (!node) {
      return
    }
    this.postOrderTraversal(node.left, result)
    this.postOrderTraversal(node.right, result)
    result.push(node.value)
  }

  getLevelOrderTraversal() {
    const result = []
    const queue = [this.root]

    while (queue.length) {
      const node = queue.shift()
      result.push(node.value)

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    return result
  }
}

module.exports = BinaryTree
