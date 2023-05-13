class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size)
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  // Simple hash function
  hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.buckets.length
  }

  // Insert key-value pair into the hash table
  set(key, value) {
    const index = this.hash(key)
    this.buckets[index].set(key, value)
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key)
    return this.buckets[index].get(key)
  }

  // Check if a key exists in the hash table
  has(key) {
    const index = this.hash(key)
    return this.buckets[index].has(key)
  }

  // Delete a key from the hash table
  delete(key) {
    const index = this.hash(key)
    return this.buckets[index].delete(key)
  }
}

module.exports = HashTable
