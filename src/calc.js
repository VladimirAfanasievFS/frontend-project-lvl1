import { getRandomNumber } from './const.js';
import launchLogic from './games/index.js';

const description = 'What is the result of the expression?';
const getSign = (number) => {
  let mark = 0;
  switch (number) {
    case 1:
      mark = '*';
      break;
    case 2:
      mark = '-';
      break;
    default:
      mark = '+';
  }
  return mark;
};
const getExpression = (symbol, number1, number2) => {
  let result = 0;
  switch (symbol) {
    case '*':
      result = number1 * number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      result = number1 + number2;
  }
  return result;
};

const getData = () => {
  const number1 = getRandomNumber(1, 99); // рандомное число
  const number2 = getRandomNumber(1, 99); // рандомное число
  const numberSign = getRandomNumber(1, 3); // рандомное число на знак
  const sing = getSign(numberSign);
  const question = `${number1} ${sing} ${number2}`; // рандомное выражение
  const questionRight = String(getExpression(sing, number1, number2));
  return [question, questionRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
