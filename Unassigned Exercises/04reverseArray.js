// ? Reverse an array

function reverseArray(arr) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength / 2; i += 1) {
    const oppositeElementIndex = arrLength - 1 - i;
    const currentElement = arr[i];

    arr[i] = arr[oppositeElementIndex];
    arr[oppositeElementIndex] = currentElement;
  }

  return arr;
}

console.log(reverseArray(["a", "b", "c", "d", "e", "f", "g"]));
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
