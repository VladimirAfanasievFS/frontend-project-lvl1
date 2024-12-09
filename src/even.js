import getRandomNumber from './const.js';
import launchLogic from './games/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberParity = (num) => (num % 2 === 0 ? 'yes' : 'no'); // проверяем на четность число

const getData = () => {
  const question = getRandomNumber(1, 99);
  const answerRight = isNumberParity(question);
  return [question, answerRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
