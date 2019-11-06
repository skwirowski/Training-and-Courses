const str = "ĄąĆćĘęŁłŃńÓóŚśŻżŹźAA"

function correctPolishLetters(string) {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0141/g, 'L')
    .replace(/\u0142/g, 'l');
}

console.log(correctPolishLetters(str));
