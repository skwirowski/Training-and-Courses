function maxSequence(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i += 1) {
    maxEndingHere += arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSequence([]));
