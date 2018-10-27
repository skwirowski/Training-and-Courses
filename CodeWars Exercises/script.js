const exampleArray = [10, 20, 34, 36, 34, 23, 21, 20, 45, 29, 7, 35, 31];

function riders(stations) {
  let counter = 1;
  let distance = 0;
  for (let i = 0; i < stations.length; i += 1) {
    distance += stations[i];
    if (distance > 100) {
      counter += 1;
      distance = stations[i];
    }
  }
  return counter;
}

console.log(riders(exampleArray));
