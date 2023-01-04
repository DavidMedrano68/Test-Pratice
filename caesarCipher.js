export function caesarCipher(string, offset) {
  if (offset > 25 || offset < -26) {
    return undefined;
  }
  let shifted = [];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArr = string.split("");
  while (stringArr.length) {
    let letter = stringArr.pop();
    if (isALetter(letter, alphabet)) {
      let bool = checkCapitalization(letter);
      let index = getIndex(letter, alphabet);
      if ((bool && index == 0) || (bool && index)) {
        let newIndex = applyOffset(index, offset);
        shifted.unshift(alphabet.at(newIndex).toUpperCase());
      } else {
        let newIndex = applyOffset(index, offset);
        shifted.unshift(alphabet.at(newIndex));
      }
    } else {
      shifted.unshift(letter);
    }
  }
  return shifted.join("");
}
function getIndex(letter, alphabet) {
  letter = letter.toLowerCase();
  if (alphabet.includes(letter)) {
    return alphabet.indexOf(letter);
  }
  return false;
}
function checkCapitalization(letter) {
  if (letter.toUpperCase() == letter) {
    return true;
  } else {
    return false;
  }
}
function applyOffset(index, offset) {
  let newIndex = index + offset;
  if (newIndex > 25) {
    return newIndex - 25;
  }
  return newIndex;
}
function isALetter(string, alphabet) {
  if (alphabet.includes(string.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
