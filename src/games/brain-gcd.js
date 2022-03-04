
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isDivisor = (dividend, divisor) => (dividend % divisor === 0);

const getGCD = (operand1, operand2) => {
  if (operand1 < 1) { return operand2; }
  if (operand2 < 1) { return operand1; }
  let divisor = 1;
  const minOperand = Math.min(operand1, operand2);
  for (let index = 1; index <= minOperand; index += 1) {
    if (isDivisor(operand1, index) && isDivisor(operand2, index)) {
      divisor = index;
    }
  }
  return divisor;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const operand1 = generateRandomNumber(0, 100);
  const operand2 = generateRandomNumber(0, 80);
  const question = `${operand1} ${operand2}`;
  const answer = getGCD(operand1, operand2);
  return {
    question,
    answer: answer.toString(),
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
