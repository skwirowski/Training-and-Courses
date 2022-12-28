// ? Reverse a string

function reverseString01(str) {
  const strArr = str.split("");
  const strArrLength = strArr.length;

  for (let i = 0; i < strArrLength / 2; i += 1) {
    const oppositeCharIndex = strArrLength - 1 - i;
    const currentChar = strArr[i];

    strArr[i] = strArr[oppositeCharIndex];
    strArr[oppositeCharIndex] = currentChar;
  }

  return strArr.join("");
}

console.log(reverseString01("abcdefg"));

function reverseString02(str) {
  const strLength = str.length;
  let reversedStr = "";

  for (let i = strLength - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseString02("hijklmnopr"));

// ? Example from FreeCodeCamp: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString03(str) {
  if (str === "") return "";
  else return reverseString03(str.substr(1)) + str.charAt(0);
}

console.log(reverseString03("hello"));

// ? Shorter version
function reverseString04(str) {
  return str === "" ? "" : reverseString04(str.substr(1)) + str.charAt(0);
}

function reverseString05(str) {
  if (str === "") {
    return "";
  } else {
    const stringWithoutFirstChar = str.substring(1);
    const firstChar = str.charAt(0);

    return reverseString05(stringWithoutFirstChar) + firstChar;
  }
}

console.log(reverseString05("hello"));
