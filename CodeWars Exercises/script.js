const sortArrayAscending = array => array.sort((a, b) => a - b);

function expressionMatter(a, b, c) {
  const firstExpression = a + b + c;
  const secondExpression = a * b * c;
  const thirdExpression = (a + b) * c;
  const fourthExpression = a * (b + c);
  const fifthExpression = a + b * c;
  const sixthExpression = a * b + c;
  const arrayOfValues = [
    firstExpression,
    secondExpression,
    thirdExpression,
    fourthExpression,
    fifthExpression,
    sixthExpression
  ];
  const sortedArrayOfValues = sortArrayAscending(arrayOfValues);
  const maximumValue = sortedArrayOfValues.slice(-1);
  return maximumValue[0];
}
expressionMatter(5, 10, 2);
