export function reverse(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  let stringArray = string.split("");
  let result = [];
  while (stringArray.length) {
    let letter = stringArray.pop();
    result.push(letter);
  }
  return result.join("");
}
