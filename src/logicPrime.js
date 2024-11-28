/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  reportsCorrectAnswer, getRandomNumber, reportsErrorsAnswer, storesPrimeNumber, getTheAnswer,
} from './const.js';
import { getName } from './greeting.js';

const prime = () => {
  let i = 0;
  let dataNumber = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const getRandomNumberOne = getRandomNumber(2, 99);// число
    console.log(`Question: ${getRandomNumberOne}`);
    const getUserData = readlineSync.question('');// ответ пользователя
    const getPrimeNumber = storesPrimeNumber();// простые числа
    for (let n = 0; n < getPrimeNumber.length; n++) {
      if (Number(getPrimeNumber[n]) === Number(getRandomNumberOne)) {
        dataNumber = `${Number(getPrimeNumber[n])}`;
      }
    }
    const isPrimeNumber = Number(dataNumber) === Number(getRandomNumberOne) ? 'yes' : 'no';
    if (getUserData === isPrimeNumber) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(getUserData, isPrimeNumber, getName)}`;
    }
    i++;
  }
  return getTheAnswer(getName);
};
export { prime };
