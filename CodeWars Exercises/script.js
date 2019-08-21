const exampleArray = [1, 2, 5, 6, 5, 2];

function duplicates(array) {
  let arrayCopy = [...array];
  let counter = 0;

  for (let i = 0; i < arrayCopy.length; i = 0) {
    const prevArrLength = arrayCopy.length;

    arrayCopy = arrayCopy.filter(item => item !== arrayCopy[i]);

    const currArrLength = arrayCopy.length;
    const pairsCount = Math.floor((prevArrLength - currArrLength) / 2);

    counter += pairsCount;
  }
  return counter;
}

console.log(duplicates(exampleArray));

// Other solutions from CodeWars
//
//
// function duplicates(array) {
//   let res = 0, odd = new Set();
//   for (let x of array) {
//     if (odd.delete(x))
//       res++;
//     else
//       odd.add(x);
//   }
//   return res;
// }
//
//
// function duplicates(a) {
//   var count = 0;
//   a.sort((b, c) => b - c);
//   console.log(a)
//   for (var i = 0; i < a.length; ++i)
//     if (a[i] == a[i + 1]) {
//       count++;
//       ++i;
//     }
//   return count
// }
