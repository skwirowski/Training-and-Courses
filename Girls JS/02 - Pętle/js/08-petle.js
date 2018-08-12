// 8.
// Stwórz tablicę złożoną z 10 kolejnych wielokrotności
// liczby 5 za pomocą pętli while
//

const multipleOf5 = () => {
  let arrayOf5Multiples = [];
  let i = 0;

  while(i < 50) {
    i += 5;
    arrayOf5Multiples.push(i);
  }
  return arrayOf5Multiples;
};
console.log(multipleOf5());