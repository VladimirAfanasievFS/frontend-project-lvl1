import getRandomNumber from '../const.js';
import launchLogic from './index.js';

const description = 'What is the result of the expression?';
const getSign = (number) => {
  switch (number) {
    case 1:
      return '*';
    case 2:
      return '-';
    default:
      return '+';
  }
};
const getExpression = (sign, number1, number2) => {
  switch (sign) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      return number1 + number2;
  }
};

const getData = () => {
  const number1 = getRandomNumber(1, 99); // рандомное число
  const number2 = getRandomNumber(1, 99); // рандомное число
  const numberSign = getRandomNumber(1, 3); // рандомное число на знак
  const sing = getSign(numberSign);
  const question = `${number1} ${sing} ${number2}`; // рандомное выражение
  const rightAnswer = String(getExpression(sing, number1, number2));
  return [question, rightAnswer];
};

const start = () => launchLogic(description, getData);

export { description, start };
