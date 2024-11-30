/* eslint-disable import/extensions */
import { getRandomNumber } from './const.js';
import { launchLogic } from './games/index.js';

const getRules = 'What is the result of the expression?';
let mark = 0; // из полученного числа делаем символ
let result = 0; // из читаемого символа делаем решение
const getData = () => {
  const getRandomNumberOne = getRandomNumber(1, 99); // рандомное число
  const getRandomNumberTwo = getRandomNumber(1, 99); // рандомное число
  const getNumberSign = getRandomNumber(1, 3); // рандомное число на знак
  switch (getNumberSign) {
    case 1:
      mark = '*';
      break;
    case 2:
      mark = '-';
      break;
    default:
      mark = '+';
  }
  const getTask = `${getRandomNumberOne} ${mark} ${getRandomNumberTwo}`; // рандомное выражение
  switch (mark) {
    case '*':
      result = getRandomNumberOne * getRandomNumberTwo;
      break;
    case '-':
      result = getRandomNumberOne - getRandomNumberTwo;
      break;
    default:
      result = getRandomNumberOne + getRandomNumberTwo;
  }
  const questionRight = result;
  return [getTask, questionRight];
};

const games = () => launchLogic(getRules, getData);

export { getRules, games };
