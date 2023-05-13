const DoubleLinkedList = require("../doubleLinkedList") // assuming DoublyLinkedList class is exported in DoublyLinkedList.js file

describe("DoublyLinkedList", () => {
  let doublyLinkedList

  beforeEach(() => {
    doublyLinkedList = new DoubleLinkedList()
  })

  test("Has correct methods", () => {
    expect(doublyLinkedList.append).toBeDefined()
    expect(doublyLinkedList.prepend).toBeDefined()
    expect(doublyLinkedList.deleteWithValue).toBeDefined()
    expect(doublyLinkedList.search).toBeDefined()
    expect(doublyLinkedList.print).toBeDefined()
  })

  test("Appends and prepends values correctly", () => {
    doublyLinkedList.append(1)
    doublyLinkedList.append(2)
    doublyLinkedList.prepend(0)

    expect(doublyLinkedList.print()).toBe("0 <-> 1 <-> 2 <-> null")
  })

  test("Deletes values correctly", () => {
    doublyLinkedList.append(1)
    doublyLinkedList.append(2)
    doublyLinkedList.append(3)

    doublyLinkedList.deleteWithValue(2)

    expect(doublyLinkedList.print()).toBe("1 <-> 3 <-> null")
  })

  test("Searches for values correctly", () => {
    doublyLinkedList.append(1)
    doublyLinkedList.append(2)
    doublyLinkedList.append(3)

    expect(doublyLinkedList.search(2)).toBe(true)
    expect(doublyLinkedList.search(4)).toBe(false)
  })
})
