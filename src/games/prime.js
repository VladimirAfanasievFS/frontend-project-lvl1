import getRandomNumber from '../helpers.js';
import launchLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => (num === true);
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

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const answer = isPrime(getNumberSimple(question)) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => launchLogic(description, generateRound);

export { description, start };
