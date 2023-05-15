const HashTable = require("../hashTable") // assuming HashTable class is exported in HashTable.js file

describe("HashTable", () => {
  let hashTable

  beforeEach(() => {
    hashTable = new HashTable()
  })

  test("Has correct methods", () => {
    expect(hashTable.set).toBeDefined()
    expect(hashTable.get).toBeDefined()
    expect(hashTable.has).toBeDefined()
    expect(hashTable.delete).toBeDefined()
  })

  test("Sets and gets values correctly", () => {
    hashTable.set("key1", "value1")
    hashTable.set("key2", "value2")

    expect(hashTable.get("key1")).toBe("value1")
    expect(hashTable.get("key2")).toBe("value2")
  })

  test("Checks for keys correctly", () => {
    hashTable.set("key1", "value1")

    expect(hashTable.has("key1")).toBe(true)
    expect(hashTable.has("key2")).toBe(false)
  })

  test("Deletes keys correctly", () => {
    hashTable.set("key1", "value1")
    hashTable.set("key2", "value2")

    expect(hashTable.delete("key1")).toBe(true)
    expect(hashTable.get("key1")).toBeUndefined()
    expect(hashTable.has("key1")).toBe(false)
  })
})
