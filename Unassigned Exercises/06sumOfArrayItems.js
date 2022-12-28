//? Get sum of array items

function arraySum(arr) {
  const firstItem = arr[0];
  const remainingItems = arr.slice(1, arr.length);

  if (remainingItems.length <= 1) {
    return firstItem + remainingItems[0];
  }

  return firstItem + arraySum(remainingItems);
}

console.log(arraySum([1, 2, 3, 5, 4, 9]));
