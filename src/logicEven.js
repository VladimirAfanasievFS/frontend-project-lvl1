/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { gatName } from './greeting.js';
import {
  getRandomNumber, reportsCorrectAnswer, reportsErrorsAnswer, getTheAnswer,
} from './const.js';

const result = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // знакомим пользователя с правилами игры
  let i = 1;
  while (i <= 3) {
    const a = getRandomNumber(1, 99);
    console.log(`Question: ${a}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    const checkNumber = Number(a) % 2 === 0 ? 'yes' : 'no'; // проверяем на четность число
    const verification = answer === checkNumber ? 1 : 0; // проверям ответ с числом
    if (verification === 1) {
      console.log(reportsCorrectAnswer()); // при правильном ответе продолжаем игру
    } else {
      return `${reportsErrorsAnswer('yes', 'no', gatName)}`; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return getTheAnswer(gatName);
};
export { result };
