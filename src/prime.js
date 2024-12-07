import { getRandomNumber, storesPrimeNumber } from './const.js';
import launchLogic from './games/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumberParity = (num1, num2) => (num1 === Number(num2) ? 'yes' : 'no'); // проверяем на четность число

const getData = () => {
  let dataNumber = 0;
  const question = getRandomNumber(1, 99);
  const getPrimeNumber = storesPrimeNumber();// простые числа
  for (let n = 0; n < getPrimeNumber.length; n += 1) {
    if (Number(getPrimeNumber[n]) === Number(question)) {
      dataNumber = `${Number(getPrimeNumber[n])}`;
    }
  }
  const questionRight = isNumberParity(question, dataNumber);
  return [question, questionRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
