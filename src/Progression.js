/* eslint-disable import/extensions */
import { getRandomNumber } from './const.js';
import { launchLogic } from './games/index.js';

const getRules = 'What number is missing in the progression?';

const getData = () => {
  const getOneNumber = getRandomNumber(1, 20);// первое число с чего начинает
  const getLengthProgression = getRandomNumber(5, 10);// длина прогрессии
  const getArithmeticRandom = getRandomNumber(1, 4);
  let i = 0;
  let missNumber = 0;
  let a = 0; // значение которое спрятано
  const getIncrease = getArithmeticRandom;
  let sum = getOneNumber;
  let result = '';
  const getLength = getRandomNumber(1, getLengthProgression);
  while (i <= getLengthProgression) {
    sum += getIncrease;
    if (i === getLength) {
      a = sum;
      missNumber = a;
      a = '..';
      result = `${result}${a} `;
    } else {
      result = `${result} ${sum}`;
    }
    i += 1;
  }
  const getTask = result;
  const questionRight = missNumber;
  return [getTask, questionRight];
};

const games = () => launchLogic(getRules, getData);

export { getRules, games };
