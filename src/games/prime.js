import getRandomNumber from '../const.js';
import launchLogic from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumberSimple = (num) => (num === true ? 'yes' : 'no');
const getNumberSimple = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = getRandomNumber(1, 99);
  const rightAnswer = isNumberSimple(getNumberSimple(question));
  return [question, rightAnswer];
};

const start = () => launchLogic(description, getData);

export { description, start };
