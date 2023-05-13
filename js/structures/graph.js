class Graph {
  constructor() {
    this.vertices = new Map()
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set())
    }
  }

  addEdge(fromVertex, toVertex) {
    if (this.vertices.has(fromVertex) && this.vertices.has(toVertex)) {
      this.vertices.get(fromVertex).add(toVertex)
    }
  }

  removeVertex(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex)
      for (const set of this.vertices.values()) {
        set.delete(vertex)
      }
    }
  }

  removeEdge(fromVertex, toVertex) {
    if (
      this.vertices.has(fromVertex) &&
      this.vertices.has(toVertex) &&
      this.vertices.get(fromVertex).has(toVertex)
    ) {
      this.vertices.get(fromVertex).delete(toVertex)
    }
  }

  hasVertex(vertex) {
    return this.vertices.has(vertex)
  }

  hasEdge(fromVertex, toVertex) {
    if (
      this.vertices.has(fromVertex) &&
      this.vertices.has(toVertex) &&
      this.vertices.get(fromVertex).has(toVertex)
    ) {
      return true
    }
    return false
  }

  getNeighbors(vertex) {
    if (this.vertices.has(vertex)) {
      return Array.from(this.vertices.get(vertex))
    }
    return []
  }
}

module.exports = Graph
