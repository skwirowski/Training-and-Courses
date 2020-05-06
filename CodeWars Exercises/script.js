const exampleOne = '2 glasses of wine and 1 shot';
const exampleTwo = '1 beer';
const exapmleThree = '1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer';

const hydrate = (s) => {
  const drinksQuantity = s.match(/[1-9]/g).reduce((tot, curr) => tot + Number(curr), 0);
  return `${drinksQuantity} ${drinksQuantity > 1 ? 'glasses' : 'glass'} of water`;
};

function hydrate(s) {
  //* Arrange
  const digitsRegEx = /[1-9]/g;
  const createArrayOfMatchedStrings = (string, regularEx) => string.match(regularEx);
  const transformStringToNumber = (string) => Number(string);
  const changeArrayOfStringsToArrayOfNumbers = (array, transformationCallback) => {
    return array.map((item) => transformationCallback(item));
  };
  const sumOfArrayItems = (array) => array.reduce((total, current) => total + current, 0);
  const getResultDependingOnCondition = (condition, ifTrue, ifFalse) =>
    condition ? ifTrue : ifFalse;

  //* Act
  const getDrinksFromDescription = createArrayOfMatchedStrings(s, digitsRegEx);
  const transformDrinksStringsToDigits = changeArrayOfStringsToArrayOfNumbers(
    getDrinksFromDescription,
    transformStringToNumber,
  );
  const totalDrinksQuantity = sumOfArrayItems(transformDrinksStringsToDigits);
  const wordRightForm = getResultDependingOnCondition(
    totalDrinksQuantity === 1,
    'glass',
    'glasses',
  );

  //* Resolve
  const getHydrationRecommendation = `${totalDrinksQuantity} ${wordRightForm} of water`;

  return getHydrationRecommendation;
}

console.log(hydrate(exampleOne));
console.log(hydrate(exampleTwo));
console.log(hydrate(exapmleThree));
