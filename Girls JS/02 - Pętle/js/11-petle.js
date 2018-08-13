// 11.
// Wypisz na stronie elementy poniższej tablicy
// do elementu "stop" włącznie.
// var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to']
//

const stopArray = () => {
  const myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to'];
  let newArray = [];
  let i = -1;

  while(myArray[i] !== 'stop') {
    i++;
    newArray.push(myArray[i]);
  }
  return newArray;
};

console.log(stopArray());