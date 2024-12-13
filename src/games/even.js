import getRandomNumber from '../helpers.js';
import launchLogic from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const answer = isEven(question);
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
