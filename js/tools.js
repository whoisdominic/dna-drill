class LinkNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function generateRandomArray(size, min, max) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return array
}

function generateStepArray(size) {
  const array = []
  for (let i = 1; i < size + 1; i++) {
    array.push(i)
  }
  return array
}

function generateLinkedList(input) {
  let head = new LinkNode(input[0], null) // first node
  let current = head
  for (let i = 1; i < input.length; i++) {
    current.next = new LinkNode(input[i], null)
    current = current.next
  }
  return head
}

module.exports = {
  generateRandomArray,
  generateLinkedList,
  generateStepArray,
  LinkNode,
}
