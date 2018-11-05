// Example strings
const exStr1 = 'katas';
const exStr2 = 'steak';

const scramble = (str1, str2) => {
  let canRearrange;
  for (let i = 0; i < str2.length; i += 1) {
    const char = str2.charAt(i);
    const regExp = new RegExp(char, 'g');
    /*
    * Compare how many times each character occurs in the base string (str2 - string to check for)
    * and in compared string (str1 - string to be checked). If character occurs in str1 at least
    * as many times as in str2, then loop iteration returns canRearrange = true. Otherwise loop
    * iteration returns canRearrange = false and immediately breaks loop (jump out of the loop).
    */
    const occur1 = (str1.match(regExp) || []).length;
    const occur2 = (str2.match(regExp) || []).length;
    if (occur1 >= occur2) {
      canRearrange = true;
    } else {
      canRearrange = false;
      break;
    }
  }
  return canRearrange;
};

console.log(scramble(exStr1, exStr2));
