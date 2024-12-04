import { getRandomNumber } from './const.js';
import launchLogic from './games/index.js';

const description = 'What number is missing in the progression?';

const getData = () => {
  const number1 = getRandomNumber(1, 20);// первое число с чего начинает
  const lengthProgression = getRandomNumber(5, 10);// длина прогрессии
  const arithmeticRandom = getRandomNumber(1, 4);
  let i = 0;
  let missNumber = 0;
  let a = 0; // значение которое спрятано
  const getIncrease = arithmeticRandom;
  let sum = number1;
  let result = '';
  const getLength = getRandomNumber(1, lengthProgression);
  while (i <= lengthProgression) {
    sum += getIncrease;
    if (i === getLength) {
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
  const questionRight = String(missNumber);
  return [question, questionRight];
};

const games = () => console.log(launchLogic(description, getData));

export { description, games };
