import caesarCipherFunctions from 'scripts/37-firstVariationOnCaesarCipher';

const {
  alphabetChars,
  transformStringToUpperCase,
  shiftCharacters,
  findCharacterIndex,
  switchCharacters,
} = caesarCipherFunctions;

describe('First Variation On Caesar Cipher', () => {
  describe('transformStringToUpperCase function', () => {
    it('it should transform given string to uppercase', () => {
      const testString = 'hello from another world';
      const testFunction = transformStringToUpperCase(testString);

      expect(testFunction).toBe('HELLO FROM ANOTHER WORLD');
    });
  });

  describe('shiftCharacters function', () => {
    it('it should slice specified number of characters from given string and place them at the end', () => {
      const testString = 'abcdefghij';
      const testShiftSize = 5;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('fghijabcde');
    });

    it('it should slice specified number of characters from given string and place them at the end', () => {
      const testString = '0123456789';
      const testShiftSize = 2;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('2345678901');
    });

    it('it should slice specified number of characters from given string and place them at the end', () => {
      const testString = 'klmnopqrst';
      const testShiftSize = 0;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('klmnopqrst');
    });

    it('it should slice specified number of characters from given string and place them at the end', () => {
      const testString = 'uwxyzabcde';
      const testShiftSize = 10;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('uwxyzabcde');
    });
  });

  describe('findCharacterIndex function', () => {
    it('it should find index of first occurrence of a specified character in given string', () => {
      const testCharacter = 'a';
      const testString = 'I was wondering if after all these years';
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(3);
    });

    it('it should find index of first occurrence of a specified character in given string', () => {
      const testCharacter = 'f';
      const testString = 'I was wondering if after all these years';
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(17);
    });

    it('it should find index of first occurrence of a specified character in given string', () => {
      const testCharacter = 'x';
      const testString = 'I was wondering if after all these years';
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(-1);
    });
  });

  describe('switchCharacters function', () => {
    it('it should perform ciphering given string by shifting each character by shift value increasing by 1 each iteration', () => {
      const testString = 'I should have known that you would have a perfect answer for me!!!';
      const testBaseString = alphabetChars;
      const testShiftSize = 1;
      const testFunction = switchCharacters(testString, testBaseString, testShiftSize);

      expect(testFunction).toBe('J vltasl rlhr zdfog odxr ypw atasl rlhr p gwkzzyq zntyhv lvz wp!!!');
    });
  });
});
