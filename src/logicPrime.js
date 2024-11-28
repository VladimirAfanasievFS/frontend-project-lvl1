/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  reportsCorrectAnswer, getRandomNumber, reportsErrorsAnswer, storesPrimeNumber, getTheAnswer,
} from './const.js';
import { name } from './greeting.js';

const prime = () => {
  let result = '';
  let i = 0;
  const p = 0;
  let data = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const a = getRandomNumber(2, 99);// число
    const numberRandom = `Question: ${a}`;
    console.log(numberRandom);
    const userData = readlineSync.question('');// ответ пользователя
    const b = storesPrimeNumber();// простые числа
    for (let n = 0; n < b.length; n++) {
      if (Number(b[n]) === Number(a)) {
        data = `${Number(b[n])}`;
      }
    }
    if (Number(data) === Number(a)) {
      result = 'yes';
    } else {
      result = 'no';
    }
    if (userData === result) {
      console.log(reportsCorrectAnswer());
    } else {
      return `${reportsErrorsAnswer(userData, result, name)}`;
    }
    i++;
  }
  return getTheAnswer(name);
};
export { prime };
