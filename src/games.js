import { getRandomNumber } from './const';
import { launchLogic } from './games/index';

const getRules = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const getRandomNumberOne = getRandomNumber(1, 100);
  const getRandomNumberTwo = getRandomNumber(1, 100);
  const getTask = `${getRandomNumberOne} ${getRandomNumberTwo}`;
  const noD = (a = getRandomNumberOne, b = getRandomNumberTwo) => {
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const questionRight = Number(noD());
  return [getTask, questionRight];
};

const games = () => launchLogic(getRules, getData);

export { getRules, games };
