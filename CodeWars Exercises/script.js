const exStr = 'scout';
const exCode = [20, 12, 18, 30, 21];

const findTheKeyArr = (message, code) => {
  return [...message].map((item, index) => code[index] - item.charCodeAt(0) + 96);
};

const checkKey = (code, message, key) => {
  let resultKey;
  for (let i = 0; i <= message.length; i += 1) {
    const keyArr = key.slice(0, i);
    const word = String
      .fromCharCode(
        ...code.map((item, index) => item - Number(keyArr[index % keyArr.length]) + 96)
      );
    resultKey = keyArr;
    if (word === message) { break; }
  }
  return Number(resultKey.join(''));
};

const findTheKey = (message, code) => {
  const keyArr = findTheKeyArr(message, code);
  return checkKey(code, message, keyArr);
};

console.log(findTheKey(exStr, exCode));
