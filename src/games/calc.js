import getRandomNumber from '../helpers.js';
import launchLogic from './index.js';

const description = 'What is the result of the expression?';
const getSign = ['*', '-', '+'];
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

const generateRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const numberSign = getRandomNumber(0, (getSign.length));
  const sing = getSign[numberSign];
  const question = `${number1} ${sing} ${number2}`;
  const answer = String(getExpression(sing, number1, number2));
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
