/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import {
  reportsCorrectAnswer, reportsErrorsAnswer, getRandomNumber, getTheAnswer,
} from './const.js';
import { name } from './greeting.js';

const reslt = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 1;
  while (i <= 3) {
    const randomOne = getRandomNumber(1, 100);
    const randomeTwo = getRandomNumber(1, 100);
    console.log(`Question: ${randomOne} ${randomeTwo}`);
    const noD = (a = randomOne, b = randomeTwo) => {
      while (a != 0 && b != 0) {
        if (a > b) {
          a %= b;
        } else {
          b %= a;
        }
      }
      return a + b;
    };
    const answer = readlineSync.question(' '); // получаем ответ от пользователя
    const verification = Number(answer) === Number(noD()) ? 1 : 0; // проверям ответ с числом

    if (Number(verification) === 1) {
      console.log(`${reportsCorrectAnswer()}`);
    } else {
      return `${reportsErrorsAnswer(answer, noD(), name)}`;
    }
    i += 1;
  }
  return getTheAnswer();
};
export { reslt };
