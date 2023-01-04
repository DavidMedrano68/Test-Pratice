import { capitalize } from "./capitalize.js";
test("regular", () => {
  expect(capitalize("hey")).toBe("Hey");
});
test("already capitalized", () => {
  expect(capitalize("Hey")).toBeFalsy();
});
test("different data type", () => {
  expect(capitalize(5)).toBeFalsy();
});
