import getRandomNumber from './const.js';
import launchLogic from './games/index.js';

const description = 'What is the result of the expression?';
const getSign = (number) => {
  let sign = 0;
  switch (number) {
    case 1:
      sign = '*';
      break;
    case 2:
      sign = '-';
      break;
    default:
      sign = '+';
  }
  return sign;
};
const getExpression = (sign, number1, number2) => {
  let result = 0;
  switch (sign) {
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
