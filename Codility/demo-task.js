/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

const exampleArray = [3, 1, 4, 6, 5];

const solution = A => {
  const arraySet = new Set(A);
  const uniqueItemsArray = [...arraySet];
  const positiveIntegersArray = [];
  let missingInteger = null;

  console.log('arraySet', arraySet);
  console.log('uniqueItemsArray', uniqueItemsArray);

  for (let i = 0; i < uniqueItemsArray.length; i += 1) {
    if (uniqueItemsArray[i] > 0) {
      positiveIntegersArray.push(uniqueItemsArray[i]);
    }
  }

  console.log('positiveIntegersArray', positiveIntegersArray);

  const sortedArray = positiveIntegersArray.sort((a, b) => a - b);

  console.log('sortedArray', sortedArray);

  if (sortedArray.length === 0 || sortedArray[0] !== 1) {
    missingInteger = 1;
  } else {
    for (let i = 1; i < sortedArray.length; i += 1) {
      console.log(sortedArray[i - 1], sortedArray[i]);
      if (sortedArray[i] - sortedArray[i - 1] !== 1) {
        missingInteger = sortedArray[i - 1] + 1;
        break;
      } else {
        missingInteger = sortedArray[i] + 1;
      }
    }
  }

  return missingInteger;
};

console.log(solution(exampleArray));
