// 6.
// Stwórz obiekt i wyświetl na stronie wszystkie jego elementy
// w formacie: "(klucz) wynosi (wartość)".
// Funkcji nie wywołuj w konsoli
//

let genericObject = {
    name: "Pencil",
    color: "Black",
    type: "Wooden",
    shape: "Hexagonal"
};

const showObject = function(object) {
    let objectEntriesArray = Object.entries(object);

    for (let i = 0; i <= objectEntriesArray.length - 1; i++) {
        let container = document.createElement("div");
        let templateHTML = `
            <p>
            This object's <b>${ objectEntriesArray[i][0] }</b> is <b>${ objectEntriesArray[i][1] }.</b>
            </p>`;
        container.innerHTML = templateHTML;
        document.body.appendChild(container);
    }
};

showObject(genericObject);

/////////////////////////////////////////////////////////////////////////////

for (let key in genericObject) {
    console.log(`This object's ${ key } is ${ genericObject[key] }.`);
}