import { caesarCipher } from "./caesarCipher";
test("offset: 1", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});
test("punctuation", () => {
  expect(caesarCipher("prob.;", 3)).toBe("sure.;");
});
test("capitalization", () => {
  expect(caesarCipher("HOmer", 3)).toBe("KRphu");
});
test("maxNegativeOffset", () => {
  expect(caesarCipher("hey", -26)).toBe("hey");
});
test("maxPositiveOffset", () => {
  expect(caesarCipher("hey", 25)).toBe("hey");
});
test("overMaxPositiveOffset", () => {
  expect(caesarCipher("hey", 27)).toBeFalsy();
});
