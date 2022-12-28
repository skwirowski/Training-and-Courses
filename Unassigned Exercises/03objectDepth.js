// ? Object depth

const objectDepth = (obj) => {
  let depth = 0;

  if (typeof obj === "object" && !Array.isArray(obj)) {
    const treeValues = Object.values(obj);

    for (const value of treeValues) {
      depth = Math.max(depth, objectDepth(value));
    }

    depth += 1;
  }

  return depth;
};

const testObject = {
  d: {
    e: {
      f: 789,
    },
  },
  a: 123,
  b: { c: 456 },
};

console.log(objectDepth(testObject));
