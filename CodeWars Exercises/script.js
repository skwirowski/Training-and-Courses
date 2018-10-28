// Example numbers quantity
const exampleQuantity = 2;

const isPalindrome = str => str === [...str].reverse().join('');

const countPalindromes = (n) => {
  let counter = 0;
  for (let i = 1; i <= 10 ** n; i += 1) {
    if (isPalindrome(i.toString())) {
      counter += 1;
    }
  }
  return counter;
};
console.log(countPalindromes(exampleQuantity));
