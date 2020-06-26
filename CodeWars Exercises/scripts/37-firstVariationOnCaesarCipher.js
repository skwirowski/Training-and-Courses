const transformStringToUpperCase = (lowerCaseString) =>
  lowerCaseString
    .split('')
    .map((char) => char.toUpperCase())
    .join('');

console.log(transformStringToUpperCase('something'));

export default transformStringToUpperCase;
