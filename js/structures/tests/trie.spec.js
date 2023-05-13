const Trie = require("../trie") // assuming Trie class is exported in Trie.js file

describe("Trie", () => {
  let trie

  beforeEach(() => {
    trie = new Trie()
  })

  test("Has correct methods", () => {
    expect(trie.insert).toBeDefined()
    expect(trie.search).toBeDefined()
    expect(trie.delete).toBeDefined()
    expect(trie.startsWith).toBeDefined()
  })

  test("Inserts and searches for words correctly", () => {
    trie.insert("test")
    trie.insert("testing")
    trie.insert("tester")

    expect(trie.search("test")).toBe(true)
    expect(trie.search("testing")).toBe(true)
    expect(trie.search("tester")).toBe(true)
    expect(trie.search("tes")).toBe(false)
  })

  test("Deletes words correctly", () => {
    trie.insert("test")
    trie.insert("testing")

    expect(trie.search("test")).toBe(true)
    expect(trie.search("testing")).toBe(true)

    trie.delete("test")

    expect(trie.search("test")).toBe(false)
    expect(trie.search("testing")).toBe(true)
  })

  test("Finds words starting with a given prefix correctly", () => {
    trie.insert("test")
    trie.insert("testing")
    trie.insert("tester")
    trie.insert("temp")

    expect(trie.startsWith("test")).toBe(true)
    expect(trie.startsWith("te")).toBe(true)
    expect(trie.startsWith("tes")).toBe(true)
    expect(trie.startsWith("testi")).toBe(true)
    expect(trie.startsWith("temp")).toBe(true)

    expect(trie.startsWith("a")).toBe(false)
    expect(trie.startsWith("tesa")).toBe(false)
    expect(trie.startsWith("testa")).toBe(false)
    expect(trie.startsWith("tema")).toBe(false)
  })
})
