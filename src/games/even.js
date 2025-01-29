import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
