function catMouse(x) {
  const regExp = /[.]/g;
  return (x.match(regExp) || []).length <= 3 ? 'Caught!' : 'Escaped!';
}
console.log(catMouse(''));
