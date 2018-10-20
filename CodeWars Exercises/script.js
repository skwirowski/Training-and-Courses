function getMiddle(s) {
  let middleCharacters;
  if (s.length % 2 === 0) {
    const firstMiddleCharacterNumber = s.length / 2;
    const secondMiddleCharacterNumber = firstMiddleCharacterNumber + 1;
    middleCharacters = s.slice(
      firstMiddleCharacterNumber - 1,
      secondMiddleCharacterNumber
    );
  } else {
    const middleCharacterNumber = Math.ceil(s.length / 2);
    middleCharacters = s.slice(
      middleCharacterNumber - 1,
      middleCharacterNumber
    );
  }
  return middleCharacters;
}
const s = 'abcdefghijk';
