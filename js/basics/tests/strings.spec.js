const {
  lengthOfString,
  lastChar,
  firstNChars,
  lastNChars,
  reverseString,
  countLettersAlphabet,
  countLettersFreq,
  countWords,
  leftRotateString,
  rightRotateString,
  searchCharInString,
  searchSubstringInString,
  sortString,
  swapCharsInString,
  insertCharsInString,
  removeCharInString,
  removeAllCharInString,
} = require("../strings")

test("lengthOfString", () => {
  expect(lengthOfString("hello")).toBe(5)
  expect(lengthOfString("python")).toBe(6)
  expect(lengthOfString("")).toBe(0)
})

test("lastChar", () => {
  expect(lastChar("hello")).toBe("o")
  expect(lastChar("python")).toBe("n")
  expect(lastChar("")).toBe("")
})

test("firstNChars", () => {
  expect(firstNChars("hello", 2)).toBe("he")
  expect(firstNChars("python", 3)).toBe("pyt")
  expect(firstNChars("", 2)).toBe("")
})

test("lastNChars", () => {
  expect(lastNChars("hello", 2)).toBe("lo")
  expect(lastNChars("python", 3)).toBe("hon")
  expect(lastNChars("", 2)).toBe("")
})

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh")
  expect(reverseString("python")).toBe("nohtyp")
  expect(reverseString("")).toBe("")
})

test("countLettersAlphabet", () => {
  expect(countLettersAlphabet("hello")).toEqual([
    ["e", 1],
    ["h", 1],
    ["l", 2],
    ["o", 1],
  ])
  expect(countLettersAlphabet("python")).toEqual([
    ["h", 1],
    ["n", 1],
    ["o", 1],
    ["p", 1],
    ["t", 1],
    ["y", 1],
  ])
  expect(countLettersAlphabet("")).toEqual([])
})

test("countLettersFreq", () => {
  expect(countLettersFreq("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  expect(countLettersFreq("python")).toEqual({
    p: 1,
    y: 1,
    t: 1,
    h: 1,
    o: 1,
    n: 1,
  })
  expect(countLettersFreq("")).toEqual({})
})

test("countWords", () => {
  expect(countWords("hello world")).toBe(2)
  expect(countWords("I am a Python developer")).toBe(5)
  expect(countWords("")).toBe(0)
})

test("leftRotateString", () => {
  expect(leftRotateString("hello", 2)).toBe("llohe")
  expect(leftRotateString("python", 3)).toBe("honpyt")
  expect(leftRotateString("", 1)).toBe("")
})

test("rightRotateString", () => {
  expect(rightRotateString("hello", 2)).toBe("lohel")
  expect(rightRotateString("python", 3)).toBe("thonpy")
  expect(rightRotateString("", 1)).toBe("")
})

test("searchCharInString", () => {
  expect(searchCharInString("hello", "h")).toBe(true)
  expect(searchCharInString("python", "z")).toBe(false)
  expect(searchCharInString("", "a")).toBe(false)
})

test("searchSubstringInString", () => {
  expect(searchSubstringInString("hello world", "world")).toBe(true)
  expect(searchSubstringInString("python programming", "java")).toBe(false)
  expect(searchSubstringInString("", "abc")).toBe(false)
})

test("sortString", () => {
  expect(sortString("hello")).toBe("ehllo")
  expect(sortString("python")).toBe("hnopty")
  expect(sortString("")).toBe("")
})

test("swapCharsInString", () => {
  expect(swapCharsInString("hello", 0, 4)).toBe("oellh")
  expect(swapCharsInString("python", 1, 5)).toBe("pythno")
  expect(swapCharsInString("a", 0, 0)).toBe("a")
})

test("insertCharsInString", () => {
  expect(insertCharsInString("hello", 5, " world")).toBe("hello world")
  expect(insertCharsInString("python", 0, "I love ")).toBe("I love python")
  expect(insertCharsInString("", 0, "hello")).toBe("hello")
})

test("removeCharInString", () => {
  expect(removeCharInString("hello", "l")).toBe("heo")
  expect(removeCharInString("python", "p")).toBe("ython")
  expect(removeCharInString("", "a")).toBe("")
})

test("removeAllCharInString", () => {
  expect(removeAllCharInString("hello", "l")).toBe("heo")
  expect(removeAllCharInString("python", "p")).toBe("ython")
  expect(removeAllCharInString("", "a")).toBe("")
})
