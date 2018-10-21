const exampleArray = [-1, 2, -3, 4, 5, -6, 7, -8, 9];

function positiveSum(arr) {
  return arr
    .filter(element => element >= 0)
    .reduce((prev, curr) => prev + curr, 0);
}

console.log(positiveSum(exampleArray));
