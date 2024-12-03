const simile = (a, b) => {
  let result = 0;
  if (a === b) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
};
const storesPrimeNumber = () => {
  const result = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97, 101];
  return result;
};
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export {
  simile, getRandomNumber, storesPrimeNumber,
};
