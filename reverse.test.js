import { reverse } from "./reverse";
test("reverse", () => {
  expect(reverse("hey")).toBe("yeh");
});
test("reverseStringNumbers", () => {
  expect(reverse("5643")).toBe("3465");
});
test("sentance", () => {
  expect(reverse("we are out here")).toBe("ereh tuo era ew");
});
test("not a string", () => {
  expect(reverse(5)).toBeFalsy();
});
test("randomCapital", () => {
  expect(reverse("WolLiw")).toBe("wiLloW");
});
