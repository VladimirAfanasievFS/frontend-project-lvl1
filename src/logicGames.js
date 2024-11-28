/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import {
  reportsCorrectAnswer, reportsErrorsAnswer, getRandomNumber, getTheAnswer,
} from './const.js';
import { getName } from './greeting.js';

const reslt = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 1;
  while (i <= 3) {
    const getRandomNumberOne = getRandomNumber(1, 100);
    const getRandomNumberTwo = getRandomNumber(1, 100);
    console.log(`Question: ${getRandomNumberOne} ${getRandomNumberTwo}`);
    const noD = (a = getRandomNumberOne, b = getRandomNumberTwo) => {
      while (a != 0 && b != 0) {
        if (a > b) {
          a %= b;
        } else {
          b %= a;
        }
      }
      return a + b;
    };
    const getAnswer = readlineSync.question(' '); // получаем ответ от пользователя
    const verification = Number(getAnswer) === Number(noD()) ? 1 : 0; // проверям ответ с числом

    if (Number(verification) === 1) {
      console.log(`${reportsCorrectAnswer()}`);
    } else {
      return `${reportsErrorsAnswer(getAnswer, noD(), getName)}`;
    }
    i += 1;
  }
  return getTheAnswer(getName);
};
export { reslt };
