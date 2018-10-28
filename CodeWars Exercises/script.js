// Method used in exercise uses formula log a (b ^ m) = m * log a (b)
// Example numbers
const num1 = [2, 10];
const num2 = [2, 15];
function comparePowers(n1, n2) {
  const firstLog = Math.log(n1[0]) * n1[1];
  const secondLog = Math.log(n2[0]) * n2[1];
  if (firstLog > secondLog) return -1;
  if (firstLog < secondLog) return 1;
  return 0;
}
console.log(comparePowers(num1, num2));
