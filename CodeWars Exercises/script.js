function michaelPays(costs) {
  if (costs < 5) return +costs.toFixed(2);
  if ((1 / 3 * costs) > 10) return +(costs - 10).toFixed(2);
  return +(2 / 3 * costs).toFixed(2);
}
console.log(michaelPays(6.75));
