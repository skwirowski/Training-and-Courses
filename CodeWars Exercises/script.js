// Example array
const exArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function diagonalSum(matrix) {
  const flatArr = matrix.reduce((total, amount) => total.concat(amount));
  let sum = 0;
  for (let i = 0; i <= flatArr.length; i += matrix.length + 1) {
    sum += flatArr[i];
  }
  return sum;
}
console.log(diagonalSum(exArr));
