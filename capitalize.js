export function capitalize(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  let stringArray = string.split("");

  if (stringArray[0].toUpperCase() == stringArray[0]) {
    return undefined;
  }
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}
