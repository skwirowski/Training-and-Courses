const exampleArray = [50, 39, 49, 6, 17, 28];
const isPrime = (num) => {
  if (num <= 1) {
    return true;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

function minimumNumber(numbers) {
  let sumOfNumbers = numbers.reduce((prev, curr) => prev + curr, 0);
  let counter = 0;
  while (!isPrime(sumOfNumbers)) {
    sumOfNumbers += 1;
    counter += 1;
  }
  return counter;
}
console.log(minimumNumber(exampleArray));
