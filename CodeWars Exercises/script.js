function correctPolishLetters(string) {
  const lettersWithDiacriticalMarks = 'ĄąĆćĘęŁłŃńÓóŚśŻżŹź';
  const lettersCharacters = 'AaCcEeLlNnOoSsZzZz';

  const newArr = string.split('').map(item => {
    const diacriticalMarkIndex = lettersWithDiacriticalMarks.indexOf(item);

    if (diacriticalMarkIndex === -1) {
      return item;
    }
    return lettersCharacters.substr(diacriticalMarkIndex, 1);
  });

  return newArr.join('');
}

console.log(correctPolishLetters('ĄąĆćĘęŁłŃńÓóŚśŻżŹźAA'));
