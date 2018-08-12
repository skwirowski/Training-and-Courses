// 9.
// Wyświetl w konsoli liczby parzyste od 0 do 100
// za pomocą pętli while
//

const evenNumbers = () => {
  let i = 0;

  while(i < 100) {
    i += 2;
    console.log(i);
  }
};

evenNumbers();