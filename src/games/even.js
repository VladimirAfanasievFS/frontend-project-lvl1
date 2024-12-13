import getRandomNumber from '../const.js';
import launchLogic from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberParity = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const question = getRandomNumber(1, 99);
  const rightAnswer = isNumberParity(question);
  return [question, rightAnswer];
};

const start = () => launchLogic(description, getData);

export { description, start };
