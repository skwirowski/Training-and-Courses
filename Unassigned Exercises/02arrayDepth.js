/*
 ? Example from Quora: https://qr.ae/pvflF7
 * Return the depth of recursive array a. 
 * Any array has a depth of at least one. 
 * Non-arrays always have a depth of zero. 
 */
function arrayDepth(a) {
  var depth = 0;
  if (Array.isArray(a)) {
    for (var i in a) {
      depth = Math.max(depth, arrayDepth(a[i]));
    }
    depth++;
  }
  return depth;
}

/*
? Example from Quora: https://qr.ae/prpPA5
*/
function depth(obj) {
  var maxdepth = 0;
  if (typeof obj == "object")
    // object or array
    for (var key in obj) {
      var dpth = depth(obj[key]);
      if (dpth > maxdepth) maxdepth = dpth;
    }
  return maxdeppth + 1;
}

/*
? Example from StackOverflow: https://stackoverflow.com/a/68594661/11193846
*/
const getArrayDepth = (value) =>
  Array.isArray(value) ? 1 + Math.max(0, ...value.map(getArrayDepth)) : 0;

/*
? Task - create function that calculates array depth
function arrayDepth(arr) {
  // please finish this function
}

console.log(arrayDepth(null)); // expect 0
console.log(arrayDepth([])); // expect 1
console.log(arrayDepth([3.14])); // expect 1
console.log(arrayDepth([1, 2, [3], 4])); // expect 2
console.log(arrayDepth([1, 2, [3], [4, [5]]])); // expect 3
*/

function arrayDepth01(array) {
  let maxDepth = 0;

  if (Array.isArray(array)) {
    let depth = 0;

    array.forEach((element) => {
      depth = arrayDepth01(element);

      if (depth > maxDepth) {
        maxDepth = depth;
      }
    });

    return maxDepth + 1;
  }

  return maxDepth;
}

function arrayDepth02(array) {
  let depth = 0;

  if (Array.isArray(array)) {
    array.forEach((element) => {
      depth = Math.max(depth, arrayDepth02(element));
    });

    depth += 1;
  }

  return depth;
}
