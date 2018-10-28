// Example string
const exampleString = '_nnnnnnn_n__n______nn__nn_nnn';
function bump(x) {
  // Regular Expression
  const regExp = /n/g;
  const bumpsNumber = (x.match(regExp) || []).length;
  return (bumpsNumber <= 15) ? 'Woohoo!' : 'Car Dead';
}
console.log(bump(exampleString));
