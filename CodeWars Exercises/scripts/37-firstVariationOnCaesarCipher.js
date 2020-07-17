//* Helper data

/**
 * English alphabet letters for ciphering use
 */
const alphabetChars = 'abcdefghijklmnopqrstuvwxyz';

//* Helper functions

/**
 * Transforms whole string to uppercase
 * @param { string } lowerCaseString
 */
const transformStringToUpperCase = (lowerCaseString) =>
  lowerCaseString
    .split('')
    .map((char) => char.toUpperCase())
    .join('');

/**
 * Slices specified number of characters from the beginning of the given string and places them at the end
 * @param { string } string
 * @param { number } shift - number of letters to shift
 */
const shiftCharacters = (string, shift) => {
  const fixedStringSlice = string.slice(shift);
  const shiftedStringSlice = string.slice(0, shift);

  return fixedStringSlice + shiftedStringSlice;
};

const findCharacterIndex = (char, string) => string.indexOf(char);

//* Main functions

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

export default { alphabetChars, transformStringToUpperCase, shiftCharacters, findCharacterIndex, switchCharacters };
