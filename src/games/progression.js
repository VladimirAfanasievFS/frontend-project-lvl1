import getRandomNumber from '../const.js';
import launchLogic from './index.js';

const description = 'What number is missing in the progression?';
const getExpression = (number, numberLength, arithmetic, SecretNumber) => {
  let i = 0;
  let missNumber = 0;
  let a = 0;
  let sum = number;
  let result = '';
  while (i <= numberLength) {
    sum += arithmetic;
    if (i === SecretNumber) {
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
  const rightAnswer = String(missNumber);
  return [question, rightAnswer];
};

const getData = () => {
  const number1 = getRandomNumber(1, 20);
  const lengthProgression = getRandomNumber(5, 10);
  const arithmeticRandom = getRandomNumber(1, 4);
  const getSecretNumber = getRandomNumber(1, lengthProgression);
  return getExpression(number1, lengthProgression, arithmeticRandom, getSecretNumber);
};

const start = () => launchLogic(description, getData);

export { description, start };
