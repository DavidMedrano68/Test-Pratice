export function analyzeArray(array) {
  if (array.constructor !== Array) {
    return undefined;
  }
  if (array.some((value) => typeof value != "number")) {
    return undefined;
  }
  if (array.length === 1) {
    return {
      average: array[0],
      min: array[0],
      max: array[0],
      length: array[0],
    };
  }
  const smallestValue = array
    .sort((a, b) => {
      return a - b;
    })
    .at(0);
  const largestValue = array
    .sort((a, b) => {
      return a - b;
    })
    .at(-1);
  const length = array.length;
  let average = array.reduce((a, b) => a + b) / length;
  if (!notFloat(average)) {
    average = Number(average.toFixed(2));
  }
  return {
    average: average,
    min: smallestValue,
    max: largestValue,
    length: length,
  };
}
function notFloat(num) {
  return Number.isInteger(num);
}
console.log(analyzeArray([3, -2, 7, 10, 33, 55]));
