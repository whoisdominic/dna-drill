const Stack = require("../stack") // assuming Stack class is exported in Stack.js file

describe("Stack", () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test("Has correct methods", () => {
    expect(stack.push).toBeDefined()
    expect(stack.pop).toBeDefined()
    expect(stack.peek).toBeDefined()
    expect(stack.isEmpty).toBeDefined()
    expect(stack.size).toBeDefined()
  })

  test("Pushes and pops items correctly", () => {
    stack.push("item1")
    stack.push("item2")
    stack.push("item3")

    expect(stack.pop()).toBe("item3")
    expect(stack.pop()).toBe("item2")
    expect(stack.pop()).toBe("item1")
  })

  test("Peeks at the top item correctly", () => {
    stack.push("item1")
    stack.push("item2")

    expect(stack.peek()).toBe("item2")
    stack.pop()
    expect(stack.peek()).toBe("item1")
  })

  test("Checks if the stack is empty correctly", () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push("item1")
    expect(stack.isEmpty()).toBe(false)
  })

  test("Returns the size of the stack correctly", () => {
    expect(stack.size()).toBe(0)
    stack.push("item1")
    expect(stack.size()).toBe(1)
    stack.push("item2")
    expect(stack.size()).toBe(2)
  })
})
