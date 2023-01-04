import Calculator from "./calculator";
const Cal = new Calculator();
test("add", () => {
  expect(Cal.add(3, 5)).toBe(8);
});
test("subtract", () => {
  expect(Cal.subtract(3, 4)).toBe(-1);
});
test("divide", () => {
  expect(Cal.divide(20, 5)).toBe(4);
});
test("divide&round", () => {
  expect(Cal.divide(800, 9)).toBe(88.89);
});
test("divideByZero", () => {
  expect(Cal.divide(3, 0)).toBeFalsy();
});
test("multiply", () => {
  expect(Cal.multiply(3, 4)).toBe(12);
});
