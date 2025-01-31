import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['*', '-', '+'];
const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      throw new Error(`Unknown value state: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const numberSign = getRandomNumber(0, operators.length - 1);
  const operator = operators[numberSign];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(operator, number1, number2));
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
