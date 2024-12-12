import getRandomNumber from '../const.js';
import launchLogic from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (one, two) => {
  let a = one;
  let b = two;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGreatestCommonDivisor(number1, number2));
  return [question, rightAnswer];
};

const start = () => launchLogic(description, getData);

export { description, start };
