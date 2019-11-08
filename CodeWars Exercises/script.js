function ArithmeticSequenceSum(a, r, n, sum = 0) {
  if (n <= 0) {
    return sum;
  }

  sum += a + (n - 1) * r;

  return ArithmeticSequenceSum(a, r, n - 1, sum);
}

// This is recursive approach version
// Arithmetic progression general formula an = a1 + (n - 1) * r

console.log(ArithmeticSequenceSum(2, 3, 5));
