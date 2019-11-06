function correctPolishLetters(string) {
  const diacriticsArray = string.split('');
  const noDiacriticsArray = [];
  const lettersWithDiacriticalMarks = 'ĄąĆćĘęŁłŃńÓóŚśŻżŹź';
  const lettersCharacters = 'AaCcEeLlNnOoSsZzZz';

  for (let i = 0; i < diacriticsArray.length; i += 1) {
    const diacriticalMarkIndex = lettersWithDiacriticalMarks.indexOf(
      diacriticsArray[i],
    );

    if (diacriticalMarkIndex === -1) {
      noDiacriticsArray[i] = diacriticsArray[i];
    } else {
      noDiacriticsArray[i] = lettersCharacters.substr(diacriticalMarkIndex, 1);
    }
  }

  return noDiacriticsArray.join('');
}

console.log(correctPolishLetters('ĄąĆćĘęŁłŃńÓóŚśŻżŹźAA'));
