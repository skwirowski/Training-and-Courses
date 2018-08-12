// Find the Missing Number in a given Array

let numbers1 = [3, 8, 7, 9, 6, 4, 12, 5, 14, 19, 16, 18, 11, 10, 13, 17, 20];
let numbers2 = [3, 8, 1, 7, 9, 6, 4, 12, 5, 14, 19, 16, 18, 11, 10, 13, 17, 0, 20, 15];

function missingNumbersInArray(array) {
    let missingNumber;
    let sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray);

    for (let i = sortedArray[0]; i <= array.length; i++) {
        if (array.indexOf(i) === -1) {
            missingNumber = i;
        }
    }
    return missingNumber;
}
console.log(missingNumbersInArray(numbers1));
console.log(missingNumbersInArray(numbers2));