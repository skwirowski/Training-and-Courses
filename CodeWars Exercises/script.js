// script file for testing purposes

function longestRepetition(s) {
  const inputStringLength = s.length;
  let longestString = '';
  let currentString = '';
  let counter = 0;

  for (let i = 0; i < inputStringLength; i += 1) {
    if (!counter) {
      currentString += s[i];
      counter += 1;
    }
    if (s[i] === s[i + 1]) {
      currentString += s[i + 1];
      counter += 1;
    } else {
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
      counter = 0;
      currentString = '';
    }
  }

  return [longestString[0] || '', longestString.length];
}

const exampleStrings = ['aaaabb', 'bbbaaabaaaa', 'cbdeuuu900', 'abbbbb', 'aabb', '', 'ba'];

for (let i = 0; i < exampleStrings.length; i += 1) {
  console.log(longestRepetition(exampleStrings[i]));
}

// console.log(longestRepetition(exampleStrings[5]));
