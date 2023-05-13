const LinkedList = require("../linkedList") // assuming LinkedList class is exported in LinkedList.js file

describe("LinkedList", () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test("Has correct methods", () => {
    expect(linkedList.append).toBeDefined()
    expect(linkedList.prepend).toBeDefined()
    expect(linkedList.deleteWithValue).toBeDefined()
    expect(linkedList.search).toBeDefined()
  })

  test("Appends and prepends values correctly", () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.prepend(0)

    expect(linkedList.print()).toBe("0 -> 1 -> 2 -> null")
  })

  test("Deletes values correctly", () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    linkedList.deleteWithValue(2)

    expect(linkedList.print()).toBe("1 -> 3 -> null")
  })

  test("Searches for values correctly", () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.search(2)).toBe(true)
    expect(linkedList.search(4)).toBe(false)
  })
})
