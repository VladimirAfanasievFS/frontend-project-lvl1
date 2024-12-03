import { getRandomNumber } from './const';
import launchLogic from './games/index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberParity = (num) => (num % 2 === 0 ? 'yes' : 'no'); // проверяем на четность число

const getData = () => {
  const question = getRandomNumber(1, 99);
  const questionRight = isNumberParity(question);
  return [question, questionRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
