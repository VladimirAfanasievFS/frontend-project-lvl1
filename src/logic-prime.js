/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  right, randomOne, errorUser, primeNumber,
} from './const.js';
import { name } from './index.js';

const prime = () => {
  let result = '';
  let i = 0;
  const p = 0;
  let data = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const a = randomOne();// число
    const numberRandom = `Question: ${a}`;
    console.log(numberRandom);
    const userData = readlineSync.question('');// ответ пользователя
    const b = primeNumber();// простые числа
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
      console.log(right());
    } else {
      return `'${userData}'${errorUser()}'${result}'`;
    }
    i++;
  }
  return `Congratulatios, ${name}!`;
};
export { prime };
