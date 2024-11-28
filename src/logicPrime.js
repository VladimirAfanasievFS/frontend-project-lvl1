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
  let result = '';
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
    if (Number(dataNumber) === Number(getRandomNumberOne)) {
      result = 'yes';
    } else {
      result = 'no';
    }
    if (getUserData === result) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(getUserData, result, getName)}`;
    }
    i++;
  }
  return getTheAnswer(getName);
};
export { prime };
