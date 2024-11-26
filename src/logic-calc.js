/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { name } from './index.js';
import { randomOne, right, errorUser } from './const.js';

const solution = () => {
  let i = 1;
  let s = 0; // из полученного числа делаем символ
  let result = 0; // из читаемого символа делаем решение
  while (i <= 3) {
    const rNumber = randomOne(); // рандомное число
    const twoNumber = randomOne(); // рандомное число
    const rNSign = Math.floor(Math.random() * 4); // рандомное число на знак
    if (rNSign === 0) {
      s = '/';
    } else if (rNSign === 1) {
      s = '*';
    } else if (rNSign === 2) {
      s = '-';
    } else {
      s = '+';
    }
    const exRound = `${rNumber}${s}${twoNumber}`; // рандомное выражение
    console.log(`Question:${exRound}`); // даем число пользователю
    const answer = readlineSync.question('Your answer: '); // получаем ответ от пользователя
    if (s === '/') {
      result = rNumber / twoNumber;
    } else if (s === '*') {
      result = rNumber * twoNumber;
    } else if (s === '-') {
      result = rNumber - twoNumber;
    } else {
      result = rNumber + twoNumber;
    }
    const verification = Math.round(result) === Number(Math.round(answer)) ? 1 : 0;
    const wrong = `\'${answer}\' ${errorUser()} \'${Math.round(result)}\'. \nLet's try again, ${name}!`; // сообщение при ошибки в ответе
    if (verification === 1) {
      console.log(right()); // при правильном ответе продолжаем игру
    } else {
      return wrong; // при не правильном ответе заканчивает игру
    }
    i += 1;
  }
  return `Congratulations, ${name}`;
};
export { solution };
