import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['*', '-', '+'];
const calculate = (sign, number1, number2) => {
  switch (sign) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      throw new Error(`Unknown value state: '${sign}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const numberSign = getRandomNumber(0, (operators.length - 1));
  const sing = operators[numberSign];
  const question = `${number1} ${sing} ${number2}`;
  const answer = String(calculate(sing, number1, number2));
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
