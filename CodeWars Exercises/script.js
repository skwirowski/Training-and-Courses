const exA = [1, 2, 2, 2, 3]; // Example array a
const exB = [2, 1]; // Example array b

const array_diff = (a, b) => {
  let newArray = a;
  for (let i = 0; i < b.length; i += 1) {
    newArray = newArray.filter(val => val !== b[i]);
  }
  return newArray;
};

console.log(array_diff(exA, exB));
