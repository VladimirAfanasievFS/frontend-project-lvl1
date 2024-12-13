import getRandomNumber from '../helpers.js';
import launchLogic from './index.js';

const description = 'What number is missing in the progression?';
const getExpression = (number, numberLength, arithmetic, secretNumber) => {
  let i = 0;
  let missNumber = 0;
  let a = 0;
  let sum = number;
  let result = '';
  while (i <= numberLength) {
    sum += arithmetic;
    if (i === secretNumber) {
      a = sum;
      missNumber = a;
      a = '..';
      result = `${result}${a} `;
    } else {
      result = `${result}${sum} `;
    }
    i += 1;
  }
  const question = result;
  const answer = String(missNumber);
  return [question, answer];
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const lengthProgression = getRandomNumber(5, 10);
  const arithmeticRandom = getRandomNumber(1, 4);
  const getSecretNumber = getRandomNumber(1, lengthProgression);
  return getExpression(number1, lengthProgression, arithmeticRandom, getSecretNumber);
};

const start = () => launchLogic(description, generateRound);

export { description, start };
