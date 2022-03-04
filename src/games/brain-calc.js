
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const operand1 = generateRandomNumber(0, 10);
  const operand2 = generateRandomNumber(0, 10);
  const operators = Object.keys(calculator);
  const indexOperator = generateRandomNumber(0, operators.length - 1);
  const operator = operators[indexOperator];

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculator[operator](operand1, operand2);
  return {
    question,
    answer: answer.toString(),
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
