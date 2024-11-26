/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import {
  right, randomOne, randomeTwo, errorUser, definiteRandom,
} from './const.js';
import { name } from './index.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  let l = 0;
  while (l < 3) {
    const fromOneRandom = definiteRandom(1, 20);// первое число с чего начинает
    const quantityRandom = definiteRandom(5, 10);// длина прогрессии
    const arithmeticRandom = definiteRandom(1, 4);
    let i = 0;
    let c = 0;
    let a = 0; // значение которое спрятано
    const b = arithmeticRandom;
    let sum = fromOneRandom;
    let result = '';
    const r = definiteRandom(1, quantityRandom);
    while (i <= quantityRandom) {
      sum += b;
      if (i === r) {
        a = sum;
        c = a;
        a = '.. ';
        result = `${result} ${a}`;
      } else {
        result = `${result} ${sum}`;
      }
      i += 1;
    }
    console.log(result);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(c)) {
      console.log(right());
    } else {
      return `${answer}${errorUser()}${c}`;
    }
    l += 1;
  }
  return `Congratulations, ${name}!`;
};
export { progression };
