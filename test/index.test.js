const { reverseNumber, changeNumberBase } = require("../src/index");

describe("reverseNumber", () => {
  test("it should return 3 when n = 12 and b = 2", () => {
    expect(reverseNumber(12, 2)).toBe(3);
  });

  test("it should return F1 when n = 45 and b = 30", () => {
    expect(reverseNumber(45, 30)).toBe(451);
  });

  test("it should return 11111 when n = 5 and b = 1", () => {
    expect(reverseNumber(5, 1)).toBe(5);
  });
})

describe("changeNumberBase", () => {
  test("it should return 3 when n = 12 and b = 2", () => {
    expect(changeNumberBase(12, 2)).toBe("1100");
  });
  test("it should return 1F when n = 45 and b = 30", () => {
    expect(changeNumberBase(45, 30)).toBe("1F");
  });
  test("it should return 111 when n = 3 and b = 1", () => {
    expect(changeNumberBase(3, 1)).toBe("111");
  });
})
