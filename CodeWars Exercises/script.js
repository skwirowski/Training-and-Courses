const exCode = [20, 12, 18, 30, 21];
const exKey = 1939;

const decode = (code, n) => {
  const key = String(n);
  const arr = [...code].map((item, index) => item - Number(key[index % key.length]) + 96);
  return arr
    .map(item => String.fromCharCode(item))
    .join('');
};

console.log(decode(exCode, exKey));
