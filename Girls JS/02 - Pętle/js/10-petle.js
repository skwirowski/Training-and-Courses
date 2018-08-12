// 10.
// Pobieraj od użytkownika liczby tak długo,
// aż wpiszę liczbę większą niż 50.
// Wtedy wyświetl tablicę złożoną z wpisanych
// dotychczas liczb na stronie
//

const arrayLessThan50 = () => {
  let givenNumber = prompt("Please enter a number");
  let newArray = [];

  while(givenNumber <= 50) {
    givenNumber = prompt("Please enter a number");
    newArray.push(givenNumber);
  }
  return console.log(newArray);
};

arrayLessThan50();

