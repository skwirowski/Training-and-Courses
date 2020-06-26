import transformStringToUpperCase from 'scripts/37-firstVariationOnCaesarCipher';

describe('First Variation On Caesar Cipher', () => {
  describe('transformStringToUpperCase function');

  it('it should transform given string to uppercase', () => {
    const testString = 'hello from another world';

    const testFunction = transformStringToUpperCase(testString);

    expect(testFunction).toBe('HELLO FROM ANOTHER WORLD');
  });
});
