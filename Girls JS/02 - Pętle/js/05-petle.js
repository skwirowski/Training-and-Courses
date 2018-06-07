// 5.
// ** Za pomocą pętli policz silnię z dowolnej,
// podanej liczby
//

// Podejście iteracyjne przy użyciu pętli for

const givenNumber =  prompt("Give me an integer");

const factorial = function(number) {
    let initialValue = 1;
    for (let i = 2; i <= number; i++) {
        initialValue = initialValue * i;
    }
    return initialValue;
};

console.log(factorial(givenNumber));

// Podejście rekurencyjne - funkcja odnosi się do samej siebie

// const givenNumber =  prompt("Give me an integer");
//
// const factorial = function(number) {
//     if (number === 0) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// };
//
// console.log(factorial(givenNumber));
