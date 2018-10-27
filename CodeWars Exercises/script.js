function findSum(...theArgs) {
  const negativeArguments = theArgs.filter(element => element < 0);
  if (negativeArguments.length === 0) {
    return theArgs.reduce((prev, curr) => prev + curr, 0);
  }
  return -1;
}
