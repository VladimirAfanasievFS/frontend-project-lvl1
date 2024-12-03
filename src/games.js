import { getRandomNumber } from './const';
import launchLogic from './games/index';

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const noD = (one, two) => {
    let a = one;
    let b = two;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const questionRight = Number(noD(number1, number2));
  return [question, questionRight];
};

const games = () => launchLogic(description, getData);

export { description, games };
