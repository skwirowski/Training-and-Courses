// @ts-check

const messageExample = 'I should have known that you would have a perfect answer for me!!!';
// ? "J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"

//* Helper data
const alphabetChars = 'abcdefghijklmnopqrstuvwxyz';

//* Helper functions
const transformStringToUpperCase = (lowerCaseString) =>
  lowerCaseString
    .split('')
    .map((char) => char.toUpperCase())
    .join('');

const shiftCharacters = (string, shift) => {
  const fixedStringSlice = string.slice(shift);
  const shiftedStringSlice = string.slice(0, shift);

  return fixedStringSlice + shiftedStringSlice;
};

const findCharacterIndex = (char, string) => string.indexOf(char);

const switchCharacters = (inputString, baseString, shift) => {
  const upperCaseBaseString = transformStringToUpperCase(baseString);
  const iterations = inputString.length;
  const maxShift = baseString.length - 1;
  let switchedString = '';
  let shiftIncrement = shift;

  for (let i = 0; i < iterations; i += 1) {
    const modifier = shiftCharacters(baseString, shiftIncrement);
    const lowerCaseCheck = findCharacterIndex(inputString[i], baseString);
    const upperCaseCheck = findCharacterIndex(inputString[i], upperCaseBaseString);

    if (lowerCaseCheck !== -1) {
      switchedString += modifier[lowerCaseCheck];
    } else if (upperCaseCheck !== -1) {
      switchedString += transformStringToUpperCase(modifier)[upperCaseCheck];
    } else {
      switchedString += inputString[i];
    }

    shiftIncrement >= maxShift ? (shiftIncrement = 0) : (shiftIncrement += 1);
  }

  return switchedString;
};

const findDivision = (string, divisor) => Math.ceil(string.length / divisor);

const divideString = (string, parts) => {
  const divisor = findDivision(string, parts);
  const newArray = [];
  let repeats = 5;

  for (let i = 0; repeats > 0; i += divisor) {
    const part = string.substr(i, divisor) || 0;
    newArray.push(part);
    repeats -= 1;
  }

  return newArray;
};

function movingShift(s, shift) {
  return switchCharacters(s, alphabetChars, shift);
}

// function demovingShift(arr, shift) {
//   return "";
// }

console.log(movingShift(messageExample, 1));
console.log(findDivision('iiiiiiiiiiiiiiiii', 5));
console.log(divideString(movingShift(messageExample, 1), 5));
