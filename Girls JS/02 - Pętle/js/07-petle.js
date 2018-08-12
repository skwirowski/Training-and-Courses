// 7.
// stwórz tablicę zawierającą 3 obiekty.
// Wyświetl na stronie wszystkie elementy
// wszystkich obiektów, zaznaczając którego obiektu
// elementy są wyświetlone.
// Funkcji nie wywołuj w konsoli
//

const renderObjects = () => {
  const book1 = {
    title: "The Day of the Jackal",
    author: "Frederic Forsynth",
    year: 1971,
  };
  const book2 = {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
  };
  const book3 = {
    title: "Dune Messiah",
    author: "Frank Herbert",
    year: 1969
  };
  const booksArray = [book1, book2, book3];

  for(let i = 0; i < booksArray.length; i++) {
    let container = document.createElement("div");
    let templateHTML = `
      <h3>These are object's number ${Object.keys(booksArray)[i]} elements</h3>
      <p>${Object.keys(booksArray[i])[i]}: ${booksArray[i].title}</p>
      <p>${Object.keys(booksArray[i])[i+1]}: ${booksArray[i].author}</p>
      <p>${Object.keys(booksArray[i])[i+2]}: ${booksArray[i].year}</p>`;

    container.innerHTML = templateHTML;
    document.body.appendChild(container);
  }
  console.log(booksArray);
};

renderObjects();


