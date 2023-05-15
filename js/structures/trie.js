class TrieNode {
  constructor() {
    this.end = false
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode()
      node = node.children[char]
    }
    node.end = true
  }

  search(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) return false
      node = node.children[char]
    }
    return node.end
  }

  startsWith(prefix) {
    let node = this.root
    for (let char of prefix) {
      if (!node.children[char]) return false
      node = node.children[char]
    }
    return true
  }

  // Delete word from the Trie
  delete(word) {
    this.deleteRecursively(this.root, word, 0)
  }

  deleteRecursively(currentNode, word, index) {
    if (index == word.length) {
      // If word does not exist
      if (!currentNode.end) return false
      currentNode.end = false
      // If current node has no other mapping then return true
      return Object.keys(currentNode.children).length === 0
    }
    const ch = word.charAt(index)
    const node = currentNode.children[ch]
    // If word is not present in the Trie
    if (node == null) return false
    const shouldDeleteCurrentNode = this.deleteRecursively(
      node,
      word,
      index + 1
    )
    // If true is returned then delete the mapping of character and Trie node reference from map
    if (shouldDeleteCurrentNode) {
      delete currentNode.children[ch]
      // Return true if no mappings are left in the map
      return Object.keys(currentNode.children).length === 0
    }
    return false
  }
}

module.exports = Trie
