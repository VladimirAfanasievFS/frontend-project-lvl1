/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getName } from './greeting.js';
import {
  getRandomNumber, reportsCorrectAnswer, reportsErrorsAnswer, getTheAnswer,
} from './const.js';

const result = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // знакомим пользователя с правилами игры
  let i = 1;
  while (i <= 3) {
    const getRandomNumberOne = getRandomNumber(1, 99);
    console.log(`Question: ${getRandomNumberOne}`); // даем число пользователю
    const getAnswer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const isNumberParity = Number(getRandomNumber) % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
    const isVerification = getAnswer === isNumberParity ? 1 : 0; // проверям ответ с числом
    if (isVerification === 1) {
      console.log(reportsCorrectAnswer()); // при правильном ответе продолжаем игру
    } else {
      return `${reportsErrorsAnswer('yes', 'no', getName)}`; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return getTheAnswer(getName);
};
export { result };
