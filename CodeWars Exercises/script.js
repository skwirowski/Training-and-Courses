function updateLight(current) {
  let nextLight;
  switch (current) {
    case 'green':
      nextLight = 'yellow';
      break;
    case 'yellow':
      nextLight = 'red';
      break;
    case 'red':
      nextLight = 'green';
      break;
    default:
      nextLight = 'red';
  }
  return nextLight;
}
