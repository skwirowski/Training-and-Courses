// Example array
const exampleArray = [1, 6, 10, 18, 19, 19, 20];

function inAscOrder(arr) {
  const sortedArray = () => arr.sort((a, b) => a - b);
  return arr.join(',') === sortedArray().join(',');
}
console.log(inAscOrder(exampleArray));
