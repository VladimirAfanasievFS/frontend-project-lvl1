/* eslint-disable import/extensions */
import { getRandomNumber } from './const.js';
import { launchLogic } from './games/index.js';

const getRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumberParity = (num) => (num % 2 === 0 ? 'yes' : 'no'); // проверяем на четность число

const getData = () => {
  const getTask = getRandomNumber(1, 99);
  const questionRight = isNumberParity(getTask);
  return [getTask, questionRight];
};

const games = () => launchLogic(getRules, getData);

export { getRules, games };