/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import { getRandomNumber, storesPrimeNumber } from './const.js';
import { launchLogic } from './games/index.js';

const getRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumberParity = (num1, num2) => (num1 === Number(num2) ? 'yes' : 'no'); // проверяем на четность число

const getData = () => {
  let dataNumber = 0;
  const getTask = getRandomNumber(2, 99);
  const getPrimeNumber = storesPrimeNumber();// простые числа
  for (let n = 0; n < getPrimeNumber.length; n++) {
    if (Number(getPrimeNumber[n]) === Number(getTask)) {
      dataNumber = `${Number(getPrimeNumber[n])}`;
    }
  }
  console.log(getTask, dataNumber);
  const questionRight = isNumberParity(getTask, dataNumber);
  return [getTask, questionRight];
};

const games = () => launchLogic(getRules, getData);

export { getRules, games };
