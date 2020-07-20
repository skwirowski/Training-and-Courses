import caesarCipherFunctions from 'scripts/37-firstVariationOnCaesarCipher';

const {
  alphabetChars,
  transformStringToUpperCase,
  shiftCharacters,
  findCharacterIndex,
  switchCharacters,
  findDivision,
  divideString,
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
      const testString = 'abcdefghij';
      const testShiftSize = 0;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('abcdefghij');
    });

    it('it should slice specified number of characters from given string and place them at the end', () => {
      const testString = 'abcdefghij';
      const testShiftSize = 10;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe('abcdefghij');
    });
  });

  describe('findCharacterIndex function', () => {
    it('it should find index of first occurrence of a specified character in given string', () => {
      const testCharacter = 'm';
      const testString = 'abcdefghijklmnopqrstuvwxy';
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(12);
    });

    it('it should find index of first occurrence of a specified character in given string', () => {
      const testCharacter = 'z';
      const testString = 'abcdefghijklmnopqrstuvwxy';
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(-1);
    });
  });

  describe('switchCharacters function', () => {
    it('it should perform ciphering given string by shifting each character by shift value increasing by 1 each iteration', () => {
      const testString = 'aaaaaaaaaa';
      const testBaseString = alphabetChars;
      const testShiftSize = 1;
      const testFunction = switchCharacters(testString, testBaseString, testShiftSize);

      expect(testFunction).toBe('bcdefghijk');
    });

    it('it should perform ciphering given string by shifting each character by shift value increasing by 1 each iteration', () => {
      const testString = 'abcdefghij';
      const testBaseString = alphabetChars;
      const testShiftSize = 1;
      const testFunction = switchCharacters(testString, testBaseString, testShiftSize);

      expect(testFunction).toBe('bdfhjlnprt');
    });
  });

  describe('findDivision function', () => {
    it('it should divide given string by specified divisor and return rounded up quotient', () => {
      const testString = 'abcdefghijklmnopqrstuvwxyz';
      const testDivisor = 5;
      const testFunction = findDivision(testString, testDivisor);

      expect(testFunction).toBe(6);
    });
  });

  describe('divideString function', () => {
    it('it should divide string into five pieces that has subsequently non-increasing lengths', () => {
      const testString = 'abcdefghijklmnopq';
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(['abcd', 'efgh', 'ijkl', 'mnop', 'q']);
    });

    it('it should divide string into five pieces that has subsequently non-increasing lengths', () => {
      const testString = 'abcdefghijklmnop';
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(['abcd', 'efgh', 'ijkl', 'mnop', '']);
    });

    it('it should divide string into five pieces that has subsequently non-increasing lengths', () => {
      const testString = 'abcdefghijk';
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(['abc', 'def', 'ghi', 'jk', '']);
    });
  });
});
