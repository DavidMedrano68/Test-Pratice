import { analyzeArray } from "./analyzeArray";
test("sortedArray", () => {
  expect(analyzeArray([0, 1, 3, 4, 5])).toStrictEqual({
    average: 2.6,
    min: 0,
    max: 5,
    length: 5,
  });
});
test("unSortedArray", () => {
  expect(analyzeArray([3, -2, 7, 10, 33, 55])).toStrictEqual({
    average: 17.67,
    min: -2,
    max: 55,
    length: 6,
  });
});
test("notArray", () => {
  expect(analyzeArray("1")).toBeFalsy();
});
test("valueInArrayNaN", () => {
  expect(analyzeArray([0, 4, "hello", 9, 19])).toBeFalsy();
});
test("oneNumArray", () => {
  expect(analyzeArray([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});
