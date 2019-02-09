const exampleName = 'sam harris';

const abbrevName = name => name
  .split(' ')
  .map(item => item
    .slice(0, 1)
    .charAt(0)
    .toUpperCase())
  .join('.');

console.log(abbrevName(exampleName));
