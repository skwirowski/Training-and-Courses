const exampleString = 'scout';
const exampleKey = 1939;

const letterToNum = letter => parseInt(letter, 36) - 9;
const encryptedWordArr = word => word
  .split('')
  .map(item => letterToNum(item));

const prepareKeyArr = num => num
  .toString()
  .split('')
  .map(item => Number(item));

const getArrLength = arr => arr.length;
const divideElementsFloorInt = (numerator, divider) => Math.floor(numerator / divider);
const getElementsModulo = (numerator, divider) => numerator % divider;

const createFullIterationsKeyArr = (arr, length) => {
  const newArr = [];
  for (let i = 0; i < length; i += 1) {
    newArr.push(...arr);
  }
  return newArr;
};
const createRestKeyArr = (arr, items) => arr.slice(0, items);
const createFullKeyArr = (arr1, arr2) => arr1.concat(arr2);

const encodedNumArr = (arr1, arr2) => arr1.map((item, index) => item + arr2[index]);

const encode = (str, n) => {
  const strArr = encryptedWordArr(str);
  const keyArr = prepareKeyArr(n);
  const strArrLen = getArrLength(strArr);
  const keyArrLen = getArrLength(keyArr);
  const iterations = divideElementsFloorInt(strArrLen, keyArrLen);
  const rest = getElementsModulo(strArrLen, keyArrLen);
  const fullArr = createFullIterationsKeyArr(keyArr, iterations);
  const restArr = createRestKeyArr(keyArr, rest);
  let completeArr;

  if (keyArrLen < strArrLen) {
    completeArr = createFullKeyArr(fullArr, restArr);
  } else if (keyArr.length === strArr.length) {
    completeArr = fullArr;
  } else {
    completeArr = restArr;
  }
  return encodedNumArr(strArr, completeArr);
};

console.log('encode:', encode(exampleString, exampleKey));
