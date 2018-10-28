// Example array
const exampleArray = ['take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'bitcoin', 'perhaps'];
const sortAlphabetically = arr => arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

const addAsterisks = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    const newVal = `${str.charAt(i)}***`;
    newString += newVal;
  }
  return newString.slice(0, -3);
};

function twoSort(s) {
  const sortedArray = sortAlphabetically(s);
  return addAsterisks(sortedArray[0]);
}
console.log(sortAlphabetically(exampleArray));
console.log(twoSort(exampleArray));
