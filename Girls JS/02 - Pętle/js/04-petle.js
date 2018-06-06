// 4.
// Stwórz tablicę, a następnie
// za pomocą pętli stwórz tablicę zawierającą
// te same elementy w odwrotnej kolejności.
// Wyświetl je w alercie.
//

let genericNumberArray = [
    " one",
    " two",
    " three",
    " four",
    " five",
    " six",
    " seven",
    " eight",
    " nine",
    " ten"
];

let genericLetterArray = [
    " A",
    " B",
    " C",
    " D",
    " E",
    " F",
    " G",
    " H",
    " I",
    " J"
];

// Podejście z użyciem metody reverse()

genericNumberArray.reverse();

for (let i = 0; i < genericNumberArray.length; i++) {
    console.log(genericNumberArray[i]);
}

// Podejście alternatywne

function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

alert(reverseArray(genericLetterArray));
