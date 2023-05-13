const Graph = require("../graph")

describe("Graph", () => {
  let graph

  beforeEach(() => {
    graph = new Graph()
  })

  test("Adds vertices correctly", () => {
    graph.addVertex("A")
    graph.addVertex("B")

    expect(graph.hasVertex("A")).toBe(true)
    expect(graph.hasVertex("B")).toBe(true)
    expect(graph.hasVertex("C")).toBe(false)
  })

  test("Adds edges correctly", () => {
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")

    graph.addEdge("A", "B")
    graph.addEdge("B", "C")

    expect(graph.hasEdge("A", "B")).toBe(true)
    expect(graph.hasEdge("B", "C")).toBe(true)
    expect(graph.hasEdge("A", "C")).toBe(false)
  })

  test("Removes vertices and associated edges correctly", () => {
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")

    graph.addEdge("A", "B")
    graph.addEdge("B", "C")

    graph.removeVertex("B")

    expect(graph.hasVertex("B")).toBe(false)
    expect(graph.hasEdge("A", "B")).toBe(false)
    expect(graph.hasEdge("B", "C")).toBe(false)
  })

  test("Removes edges correctly", () => {
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")

    graph.addEdge("A", "B")
    graph.addEdge("B", "C")

    graph.removeEdge("A", "B")

    expect(graph.hasEdge("A", "B")).toBe(false)
    expect(graph.hasEdge("B", "C")).toBe(true)
  })

  test("Returns neighbors correctly", () => {
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")

    graph.addEdge("A", "B")
    graph.addEdge("B", "C")

    expect(graph.getNeighbors("A")).toEqual(["B"])
    expect(graph.getNeighbors("B")).toEqual(["C"])
    expect(graph.getNeighbors("C")).toEqual([])
  })
})
