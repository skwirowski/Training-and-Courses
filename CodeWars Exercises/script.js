function isPrime(num) {
  // Checks if the number is 0, 1, or negative. Returning true if the number is within this range.
  if (num <= 1) {
    return true;
  }
  // Checks if the number is 2 or 3. Returning true if the number is 2 or 3.
  if (num <= 3) {
    return true;
  }
  // Returns that the number is not prime if it is divisible by 2 or 3.
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  /*
  * The while loop is essentially checking every odd number that is not divisible by 3
  * until it becomes larger than the square root of the num.
  * For example, the first i and i + 2 will be 5 and 7. The next i and i + 2 will be 11 and 13.
  * It does not check 9 or 15 because both are divisible by 3 and would have been caught
  * in the last else if statement.
  * Finally returns true if the number was not divisible by any i or i+2 entries
  * because the number is prime.
  */
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function nextPrime(n) {
  let number = n + (n === 0 ? 2 : 1);
  while (isPrime(number) === false) {
    number += 1;
  }
  return number;
}

const exampleNumber = 0;
console.log(isPrime(exampleNumber));
console.log(nextPrime(exampleNumber));
